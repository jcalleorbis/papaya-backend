import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Language } from './schemas/language.schema';
import { Model } from 'mongoose';

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel(Language.name) private languageModel: Model<Language>,
  ) {}

  create(createLanguageDto: CreateLanguageDto) {
    const createdLanguage = new this.languageModel(createLanguageDto);
    return createdLanguage.save();
  }

  findAll() {
    return this.languageModel.find().exec();
  }

  async findOne(id: number) {
    const language = await this.languageModel.findById(id).exec();
    if (!language) {
      throw new NotFoundException(`Language with ID ${id} not found`);
    }
    return language;
  }

  async update(id: string, updateLanguageDto: UpdateLanguageDto) {
    const updatedLanguage = await this.languageModel
      .findByIdAndUpdate(id, updateLanguageDto, { new: true })
      .exec();
    if (!updatedLanguage) {
      throw new NotFoundException(`Language with ID ${id} not found`);
    }
    return updatedLanguage;
  }

  async remove(id: string) {
    const deletedLanguage = await this.languageModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedLanguage) {
      throw new NotFoundException(`Language with ID ${id} not found`);
    }
    return deletedLanguage;
  }
}
