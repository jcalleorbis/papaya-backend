import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorPenaltyDto } from './dto/create-tutor_penalty.dto';
import { UpdateTutorPenaltyDto } from './dto/update-tutor_penalty.dto';
import { TutorPenalty } from './schemas/tutor_penalty.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TutorPenaltyService {
  constructor(
    @InjectModel(TutorPenalty.name)
    private readonly tutorPenaltyModel: Model<TutorPenalty>,
  ) {}

  async create(
    createTutorPenaltyDto: CreateTutorPenaltyDto,
  ): Promise<TutorPenalty> {
    const createdPenalty = new this.tutorPenaltyModel(createTutorPenaltyDto);
    return createdPenalty.save();
  }

  async findAll(): Promise<TutorPenalty[]> {
    return this.tutorPenaltyModel.find().exec();
  }

  async findOne(id: string): Promise<TutorPenalty> {
    const penalty = await this.tutorPenaltyModel.findById(id).exec();
    if (!penalty) {
      throw new NotFoundException(`TutorPenalty with ID ${id} not found`);
    }
    return penalty;
  }

  async update(
    id: string,
    updateTutorPenaltyDto: UpdateTutorPenaltyDto,
  ): Promise<TutorPenalty> {
    const updatedPenalty = await this.tutorPenaltyModel
      .findByIdAndUpdate(id, updateTutorPenaltyDto, { new: true })
      .exec();
    if (!updatedPenalty) {
      throw new NotFoundException(`TutorPenalty with ID ${id} not found`);
    }
    return updatedPenalty;
  }

  async remove(id: string): Promise<TutorPenalty> {
    const deletedPenalty = await this.tutorPenaltyModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedPenalty) {
      throw new NotFoundException(`TutorPenalty with ID ${id} not found`);
    }
    return deletedPenalty;
  }
}
