import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorEducationDto } from './dto/create-tutor_education.dto';
import { UpdateTutorEducationDto } from './dto/update-tutor_education.dto';
import { TutorEducation } from './schemas/tutor_education.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TutorEducationService {
  constructor(
    @InjectModel(TutorEducation.name)
    private readonly tutorEducationModel: Model<TutorEducation>,
  ) {}

  async create(
    createTutorEducationDto: CreateTutorEducationDto,
  ): Promise<TutorEducation> {
    const createdEducation = new this.tutorEducationModel(
      createTutorEducationDto,
    );
    return createdEducation.save();
  }

  async findAll(): Promise<TutorEducation[]> {
    return this.tutorEducationModel.find().exec();
  }

  async findOne(id: string): Promise<TutorEducation> {
    const education = await this.tutorEducationModel.findById(id).exec();
    if (!education) {
      throw new NotFoundException(`TutorEducation with ID ${id} not found`);
    }
    return education;
  }

  async update(
    id: string,
    updateTutorEducationDto: UpdateTutorEducationDto,
  ): Promise<TutorEducation> {
    const updatedEducation = await this.tutorEducationModel
      .findByIdAndUpdate(id, updateTutorEducationDto, { new: true })
      .exec();
    if (!updatedEducation) {
      throw new NotFoundException(`TutorEducation with ID ${id} not found`);
    }
    return updatedEducation;
  }

  async remove(id: string): Promise<TutorEducation> {
    const deletedEducation = await this.tutorEducationModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedEducation) {
      throw new NotFoundException(`TutorEducation with ID ${id} not found`);
    }
    return deletedEducation;
  }
}
