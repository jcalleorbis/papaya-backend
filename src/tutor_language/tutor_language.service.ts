import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorLanguageDto } from './dto/create-tutor_language.dto';
import { UpdateTutorLanguageDto } from './dto/update-tutor_language.dto';
import { TutorLanguage } from './schemas/tutor_language.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TutorLanguageService {
  constructor(
    @InjectModel(TutorLanguage.name)
    private tutor_languageModel: Model<TutorLanguage>,
  ) {}

  create(createTutorLanguageDto: CreateTutorLanguageDto) {
    const createdTutor_Language = new this.tutor_languageModel(
      createTutorLanguageDto,
    );
    return createdTutor_Language.save();
  }

  findAll() {
    return this.tutor_languageModel.find().exec();
  }

  async findOne(id: number) {
    const tutor_language = await this.tutor_languageModel.findById(id).exec();
    if (!tutor_language) {
      throw new NotFoundException(`Tutor_Language with ID ${id} not found`);
    }
    return tutor_language;
  }

  async update(id: string, updateTutorLanguageDto: UpdateTutorLanguageDto) {
    const updatedTutor_Language = await this.tutor_languageModel
      .findByIdAndUpdate(id, updateTutorLanguageDto, { new: true })
      .exec();
    if (!updatedTutor_Language) {
      throw new NotFoundException(`Tutor_Language with ID ${id} not found`);
    }
    return updatedTutor_Language;
  }

  async remove(id: string) {
    const deletedTutor_Language = await this.tutor_languageModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedTutor_Language) {
      throw new NotFoundException(`Tutor_Language with ID ${id} not found`);
    }
    return deletedTutor_Language;
  }
}
