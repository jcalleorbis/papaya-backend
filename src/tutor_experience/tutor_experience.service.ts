import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTutorExperienceDto } from './dto/create-tutor_experience.dto';
import { UpdateTutorExperienceDto } from './dto/update-tutor_experience.dto';
import { TutorExperience } from './schemas/tutor_experience.schema';

@Injectable()
export class TutorExperienceService {
  constructor(
    @InjectModel('TutorExperience')
    private readonly tutorExperienceModel: Model<TutorExperience>,
  ) {}

  async create(
    createTutorExperienceDto: CreateTutorExperienceDto,
  ): Promise<TutorExperience> {
    const newExperience = new this.tutorExperienceModel(
      createTutorExperienceDto,
    );
    return newExperience.save();
  }

  async findAll(): Promise<TutorExperience[]> {
    return this.tutorExperienceModel.find().populate('tutor').exec();
  }

  async findOne(id: string): Promise<TutorExperience> {
    const experience = await this.tutorExperienceModel
      .findById(id)
      .populate('tutor')
      .exec();
    if (!experience) {
      throw new NotFoundException(`Experience with ID ${id} not found`);
    }
    return experience;
  }

  async update(
    id: string,
    updateTutorExperienceDto: UpdateTutorExperienceDto,
  ): Promise<TutorExperience> {
    const updatedExperience = await this.tutorExperienceModel
      .findByIdAndUpdate(id, updateTutorExperienceDto, { new: true })
      .exec();

    if (!updatedExperience) {
      throw new NotFoundException(`Experience with ID ${id} not found`);
    }

    return updatedExperience;
  }

  async remove(id: string): Promise<TutorExperience> {
    const deletedExperience = await this.tutorExperienceModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedExperience) {
      throw new NotFoundException(`Experience with ID ${id} not found`);
    }
    return deletedExperience;
  }
}
