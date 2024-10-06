import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorScoreDto } from './dto/create-tutor_score.dto';
import { UpdateTutorScoreDto } from './dto/update-tutor_score.dto';
import { TutorScore } from './schemas/tutor_score.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TutorScoreService {
  constructor(
    @InjectModel(TutorScore.name)
    private readonly tutorScoreModel: Model<TutorScore>,
  ) {}

  async create(createTutorScoreDto: CreateTutorScoreDto): Promise<TutorScore> {
    const createdTutorScore = new this.tutorScoreModel(createTutorScoreDto);
    return createdTutorScore.save();
  }

  async findAll(): Promise<TutorScore[]> {
    return this.tutorScoreModel.find().exec();
  }

  async findOne(id: string): Promise<TutorScore> {
    const tutorScore = await this.tutorScoreModel.findById(id).exec();
    if (!tutorScore) {
      throw new NotFoundException(`TutorScore with ID ${id} not found`);
    }
    return tutorScore;
  }

  async update(
    id: string,
    updateTutorScoreDto: UpdateTutorScoreDto,
  ): Promise<TutorScore> {
    const updatedTutorScore = await this.tutorScoreModel
      .findByIdAndUpdate(id, updateTutorScoreDto, { new: true })
      .exec();
    if (!updatedTutorScore) {
      throw new NotFoundException(`TutorScore with ID ${id} not found`);
    }
    return updatedTutorScore;
  }

  async remove(id: string): Promise<TutorScore> {
    const deletedTutorScore = await this.tutorScoreModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedTutorScore) {
      throw new NotFoundException(`TutorScore with ID ${id} not found`);
    }
    return deletedTutorScore;
  }
}
