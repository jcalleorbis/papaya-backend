import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentParentDto } from './dto/create-student_parent.dto';
import { UpdateStudentParentDto } from './dto/update-student_parent.dto';
import { InjectModel } from '@nestjs/mongoose';
import { StudentParent } from './schemas/student_parent.schemas';
import { Model } from 'mongoose';

@Injectable()
export class StudentParentService {
  constructor(
    @InjectModel(StudentParent.name)
    private StudentParentModel: Model<StudentParent>,
  ) {}

  create(createStudentParentDto: CreateStudentParentDto) {
    const createdStudentParent = new this.StudentParentModel(
      createStudentParentDto,
    );
    return createdStudentParent.save();
  }

  findAll() {
    return this.StudentParentModel.find().exec();
  }

  async findOne(id: string) {
    const StudentParent = await this.StudentParentModel.findById(id).exec();
    if (!StudentParent) {
      throw new NotFoundException(`StudentParent with ID ${id} not found`);
    }
    return StudentParent;
  }

  async update(id: string, updateStudentParentDto: UpdateStudentParentDto) {
    const updateStudentParent = await this.StudentParentModel.findByIdAndUpdate(
      id,
      updateStudentParentDto,
      { new: true },
    ).exec();
    if (!updateStudentParent) {
      throw new NotFoundException(`StudentParent with ID ${id} not found`);
    }
    return updateStudentParent;
  }

  async remove(id: string) {
    const deletedStudentParent =
      await this.StudentParentModel.findByIdAndDelete(id).exec();
    if (!deletedStudentParent) {
      throw new NotFoundException(`StudentParent with ID ${id} not found`);
    }
    return deletedStudentParent;
  }
}
