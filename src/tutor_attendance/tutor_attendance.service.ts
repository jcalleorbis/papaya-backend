import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorAttendanceDto } from './dto/create-tutor_attendance.dto';
import { UpdateTutorAttendanceDto } from './dto/update-tutor_attendance.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TutorAttendance } from './schemas/tutor_attendance.schema';
import { Model } from 'mongoose';

@Injectable()
export class TutorAttendanceService {
  constructor(
    @InjectModel(TutorAttendance.name)
    private readonly TutorAttendanceModel: Model<TutorAttendance>,
  ) {}

  async create(
    createTutorAttendanceDto: CreateTutorAttendanceDto,
  ): Promise<TutorAttendance> {
    const createdCriteria = new this.TutorAttendanceModel(
      createTutorAttendanceDto,
    );
    return createdCriteria.save();
  }

  async findAll(): Promise<TutorAttendance[]> {
    return this.TutorAttendanceModel.find().exec();
  }

  async findOne(id: string): Promise<TutorAttendance> {
    const criteria = await this.TutorAttendanceModel.findById(id).exec();
    if (!criteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return criteria;
  }

  async update(
    id: string,
    updateTutorAttendanceDto: UpdateTutorAttendanceDto,
  ): Promise<TutorAttendance> {
    const updatedCriteria = await this.TutorAttendanceModel.findByIdAndUpdate(
      id,
      updateTutorAttendanceDto,
      { new: true },
    ).exec();
    if (!updatedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return updatedCriteria;
  }

  async remove(id: string): Promise<TutorAttendance> {
    const deletedCriteria =
      await this.TutorAttendanceModel.findByIdAndDelete(id).exec();
    if (!deletedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return deletedCriteria;
  }
}
