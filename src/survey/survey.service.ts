import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { Survey } from './schemas/survey.schemas';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateSurveyDto } from './dto/update-survey.dto';

@Injectable()
export class SurveyService {
  constructor(@InjectModel(Survey.name) private surveyModel: Model<Survey>) {}

  create(createSurveyDto: CreateSurveyDto) {
    const createdSurvey = new this.surveyModel(createSurveyDto);
    return createdSurvey.save();
  }

  findAll() {
    return this.surveyModel.find().exec();
  }

  async findOne(id: string) {
    const survey = await this.surveyModel.findById(id).exec();
    if (!survey) {
      throw new NotFoundException(`Survey with ID ${id} not found`);
    }
    return survey;
  }

  async update(id: string, updateSurveyDto: UpdateSurveyDto) {
    const updateSurvey = await this.surveyModel
      .findByIdAndUpdate(id, updateSurveyDto, { new: true })
      .exec();
    if (!updateSurvey) {
      throw new NotFoundException(`Survey with ID ${id} not found`);
    }
    return updateSurvey;
  }

  async remove(id: string) {
    const deletedSurvey = await this.surveyModel.findByIdAndDelete(id).exec();
    if (!deletedSurvey) {
      throw new NotFoundException(`Survey with ID ${id} not found`);
    }
    return deletedSurvey;
  }
}
