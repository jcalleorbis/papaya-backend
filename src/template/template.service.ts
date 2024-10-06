import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Template } from './schemas/template.schema';
import { Model } from 'mongoose';

@Injectable()
export class TemplateService {
  constructor(
    @InjectModel(Template.name) private readonly TemplateModel: Model<Template>,
  ) {}

  async create(createTemplateDto: CreateTemplateDto): Promise<Template> {
    const createdCriteria = new this.TemplateModel(createTemplateDto);
    return createdCriteria.save();
  }

  async findAll(): Promise<Template[]> {
    return this.TemplateModel.find().exec();
  }

  async findOne(id: string): Promise<Template> {
    const criteria = await this.TemplateModel.findById(id).exec();
    if (!criteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return criteria;
  }

  async update(
    id: string,
    updateTemplateDto: UpdateTemplateDto,
  ): Promise<Template> {
    const updatedCriteria = await this.TemplateModel.findByIdAndUpdate(
      id,
      updateTemplateDto,
      { new: true },
    ).exec();
    if (!updatedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return updatedCriteria;
  }

  async remove(id: string): Promise<Template> {
    const deletedCriteria =
      await this.TemplateModel.findByIdAndDelete(id).exec();
    if (!deletedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return deletedCriteria;
  }
}
