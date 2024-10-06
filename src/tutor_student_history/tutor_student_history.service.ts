import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorStudentHistoryDto } from './dto/create-tutor_student_history.dto';
import { UpdateTutorStudentHistoryDto } from './dto/update-tutor_student_history.dto';
import { TutorStudentHistory } from './schemas/tutor_student_history.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TutorStudentHistoryService {
  constructor(
    @InjectModel(TutorStudentHistory.name)
    private readonly TutorStudentHistoryModel: Model<TutorStudentHistory>,
  ) {}

  async create(
    createTutorStudentHistoryDto: CreateTutorStudentHistoryDto,
  ): Promise<TutorStudentHistory> {
    const createdHistory = new this.TutorStudentHistoryModel(
      createTutorStudentHistoryDto,
    );
    return createdHistory.save();
  }

  async findAll(): Promise<TutorStudentHistory[]> {
    return this.TutorStudentHistoryModel.find().exec();
  }

  async findOne(id: string): Promise<TutorStudentHistory> {
    const history = await this.TutorStudentHistoryModel.findById(id).exec();
    if (!history) {
      throw new NotFoundException(
        `TutorStudentHistory with ID ${id} not found`,
      );
    }
    return history;
  }

  async update(
    id: string,
    updateTutorStudentHistoryDto: UpdateTutorStudentHistoryDto,
  ): Promise<TutorStudentHistory> {
    const updatedHistory =
      await this.TutorStudentHistoryModel.findByIdAndUpdate(
        id,
        updateTutorStudentHistoryDto,
        { new: true },
      ).exec();
    if (!updatedHistory) {
      throw new NotFoundException(
        `TutorStudentHistory with ID ${id} not found`,
      );
    }
    return updatedHistory;
  }

  async remove(id: string): Promise<TutorStudentHistory> {
    const deletedHistory =
      await this.TutorStudentHistoryModel.findByIdAndDelete(id).exec();
    if (!deletedHistory) {
      throw new NotFoundException(
        `TutorStudentHistory with ID ${id} not found`,
      );
    }
    return deletedHistory;
  }
}
