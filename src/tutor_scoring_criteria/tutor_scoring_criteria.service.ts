import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTutorScoringCriteriaDto } from './dto/create-tutor_scoring_criterion.dto';
import { UpdateTutorScoringCriteriaDto } from './dto/update-tutor_scoring_criterion.dto';
import { TutorScoringCriteria } from './schemas/tutor_scoring_criteria.schema';

@Injectable()
export class TutorScoringCriteriaService {
  constructor(
    @InjectModel(TutorScoringCriteria.name)
    private readonly tutorScoringCriteriaModel: Model<TutorScoringCriteria>,
  ) {}

  async create(
    createTutorScoringCriteriaDto: CreateTutorScoringCriteriaDto,
  ): Promise<TutorScoringCriteria> {
    const createdCriteria = new this.tutorScoringCriteriaModel(
      createTutorScoringCriteriaDto,
    );
    return createdCriteria.save();
  }

  async findAll(): Promise<TutorScoringCriteria[]> {
    return this.tutorScoringCriteriaModel.find().exec();
  }

  async findOne(id: string): Promise<TutorScoringCriteria> {
    const criteria = await this.tutorScoringCriteriaModel.findById(id).exec();
    if (!criteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return criteria;
  }

  async update(
    id: string,
    updateTutorScoringCriteriaDto: UpdateTutorScoringCriteriaDto,
  ): Promise<TutorScoringCriteria> {
    const updatedCriteria = await this.tutorScoringCriteriaModel
      .findByIdAndUpdate(id, updateTutorScoringCriteriaDto, { new: true })
      .exec();
    if (!updatedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return updatedCriteria;
  }

  async remove(id: string): Promise<TutorScoringCriteria> {
    const deletedCriteria = await this.tutorScoringCriteriaModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return deletedCriteria;
  }
}
