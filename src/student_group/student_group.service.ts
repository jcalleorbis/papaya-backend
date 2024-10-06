import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentGroupDto } from './dto/create-student_group.dto';
import { UpdateStudentGroupDto } from './dto/update-student_group.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentGroup } from './entities/student_group.entity';

@Injectable()
export class StudentGroupService {
  constructor(
    @InjectModel(StudentGroup.name)
    private StudentGroupModel: Model<StudentGroup>,
  ) {}

  create(createStudentGroupDto: CreateStudentGroupDto) {
    const createdStudentGroup = new this.StudentGroupModel(
      createStudentGroupDto,
    );
    return createdStudentGroup.save();
  }

  findAll() {
    return this.StudentGroupModel.find().exec();
  }

  async findOne(id: string) {
    const StudentGroup = await this.StudentGroupModel.findById(id).exec();
    if (!StudentGroup) {
      throw new NotFoundException(`StudentGroup with ID ${id} not found`);
    }
    return StudentGroup;
  }

  async update(id: string, updateStudentGroupDto: UpdateStudentGroupDto) {
    const updateStudentGroup = await this.StudentGroupModel.findByIdAndUpdate(
      id,
      updateStudentGroupDto,
      { new: true },
    ).exec();
    if (!updateStudentGroup) {
      throw new NotFoundException(`StudentGroup with ID ${id} not found`);
    }
    return updateStudentGroup;
  }

  async remove(id: string) {
    const deletedStudentGroup =
      await this.StudentGroupModel.findByIdAndDelete(id).exec();
    if (!deletedStudentGroup) {
      throw new NotFoundException(`StudentGroup with ID ${id} not found`);
    }
    return deletedStudentGroup;
  }
}
