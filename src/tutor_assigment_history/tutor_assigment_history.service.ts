import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorAssigmentHistoryDto } from './dto/create-tutor_assigment_history.dto';
import { UpdateTutorAssigmentHistoryDto } from './dto/update-tutor_assigment_history.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TutorAssigmentHistory } from './schemas/tutor_assigment_history.schema';

@Injectable()
export class TutorAssigmentHistoryService {
  constructor(
    @InjectModel(TutorAssigmentHistory.name)
    private readonly TutorAssigmentHistoryModel: Model<TutorAssigmentHistory>,
  ) {}

  async create(
    createTutorAssigmentHistoryDto: CreateTutorAssigmentHistoryDto,
  ): Promise<TutorAssigmentHistory> {
    const createdCriteria = new this.TutorAssigmentHistoryModel(
      createTutorAssigmentHistoryDto,
    );
    return createdCriteria.save();
  }

  async findAll(): Promise<TutorAssigmentHistory[]> {
    return this.TutorAssigmentHistoryModel.find().exec();
  }

  async findOne(id: string): Promise<TutorAssigmentHistory> {
    const criteria = await this.TutorAssigmentHistoryModel.findById(id).exec();
    if (!criteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return criteria;
  }

  async update(
    id: string,
    updateTutorAssigmentHistoryDto: UpdateTutorAssigmentHistoryDto,
  ): Promise<TutorAssigmentHistory> {
    const updatedCriteria =
      await this.TutorAssigmentHistoryModel.findByIdAndUpdate(
        id,
        updateTutorAssigmentHistoryDto,
        { new: true },
      ).exec();
    if (!updatedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return updatedCriteria;
  }

  async remove(id: string): Promise<TutorAssigmentHistory> {
    const deletedCriteria =
      await this.TutorAssigmentHistoryModel.findByIdAndDelete(id).exec();
    if (!deletedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return deletedCriteria;
  }
}
