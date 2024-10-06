import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Grade } from './schemas/grade.schema';
import { Model } from 'mongoose';

@Injectable()
export class GradeService {
  constructor(@InjectModel(Grade.name) private gradeModel: Model<Grade>) {}

  create(createGradeDto: CreateGradeDto) {
    const createdGrade = new this.gradeModel(createGradeDto);
    return createdGrade.save();
  }

  findAll() {
    return this.gradeModel.find().exec();
  }

  async findOne(id: string) {
    const grade = await this.gradeModel.findById(id).exec();
    if (!grade) {
      throw new NotFoundException(`Grade with ID ${id} not found`);
    }
    return grade;
  }

  async update(id: string, updateGradeDto: UpdateGradeDto) {
    const updatedGrade = await this.gradeModel
      .findByIdAndUpdate(id, updateGradeDto, { new: true })
      .exec();
    if (!updatedGrade) {
      throw new NotFoundException(`Grade with ID ${id} not found`);
    }
    return updatedGrade;
  }

  async remove(id: string) {
    const deletedGrade = await this.gradeModel.findByIdAndDelete(id).exec();
    if (!deletedGrade) {
      throw new NotFoundException(`Grade with ID ${id} not found`);
    }
    return deletedGrade;
  }
}
