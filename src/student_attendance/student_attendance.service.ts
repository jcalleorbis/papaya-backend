import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentAttendanceDto } from './dto/create-student_attendance.dto';
import { UpdateStudentAttendanceDto } from './dto/update-student_attendance.dto';
import { InjectModel } from '@nestjs/mongoose';
import { StudentAttendance } from './schemas/student_attendance.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentAttendanceService {
  constructor(
    @InjectModel(StudentAttendance.name)
    private StudentAttendanceModel: Model<StudentAttendance>,
  ) {}

  create(createStudentAttendanceDto: CreateStudentAttendanceDto) {
    const createdStudentAttendance = new this.StudentAttendanceModel(
      createStudentAttendanceDto,
    );
    return createdStudentAttendance.save();
  }

  findAll() {
    return this.StudentAttendanceModel.find().exec();
  }

  async findOne(id: string) {
    const studentAttendance =
      await this.StudentAttendanceModel.findById(id).exec();
    if (!studentAttendance) {
      throw new NotFoundException(`StudentAttendance with ID ${id} not found`);
    }
    return studentAttendance;
  }

  async update(
    id: string,
    updateStudentAttendanceDto: UpdateStudentAttendanceDto,
  ) {
    const updatedStudentAttendance =
      await this.StudentAttendanceModel.findByIdAndUpdate(
        id,
        updateStudentAttendanceDto,
        { new: true },
      ).exec();
    if (!updatedStudentAttendance) {
      throw new NotFoundException(`StudentAttendance with ID ${id} not found`);
    }
    return updatedStudentAttendance;
  }

  async remove(id: string) {
    const deletedStudentAttendance =
      await this.StudentAttendanceModel.findByIdAndDelete(id).exec();
    if (!deletedStudentAttendance) {
      throw new NotFoundException(`StudentAttendance with ID ${id} not found`);
    }
    return deletedStudentAttendance;
  }
}
