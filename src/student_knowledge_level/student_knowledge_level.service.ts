import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentKnowledgeLevelDto } from './dto/create-student_knowledge_level.dto';
import { UpdateStudentKnowledgeLevelDto } from './dto/update-student_knowledge_level.dto';
import { StudentKnowledgeLevel } from './schemas/student_knowledge_level.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudentKnowledgeLevelService {
  constructor(
    @InjectModel(StudentKnowledgeLevel.name)
    private studentKnowledgeLevelModel: Model<StudentKnowledgeLevel>,
  ) {}

  async create(
    createStudentKnowledgeLevelDto: CreateStudentKnowledgeLevelDto,
  ): Promise<StudentKnowledgeLevel> {
    const createdKnowledgeLevel = new this.studentKnowledgeLevelModel(
      createStudentKnowledgeLevelDto,
    );
    return createdKnowledgeLevel.save();
  }

  async findAll(): Promise<StudentKnowledgeLevel[]> {
    return this.studentKnowledgeLevelModel.find().exec();
  }

  async findOne(id: string): Promise<StudentKnowledgeLevel> {
    const knowledgeLevel = await this.studentKnowledgeLevelModel
      .findById(id)
      .exec();
    if (!knowledgeLevel) {
      throw new NotFoundException(
        `StudentKnowledgeLevel with ID ${id} not found`,
      );
    }
    return knowledgeLevel;
  }

  async update(
    id: string,
    updateStudentKnowledgeLevelDto: UpdateStudentKnowledgeLevelDto,
  ): Promise<StudentKnowledgeLevel> {
    const updatedKnowledgeLevel = await this.studentKnowledgeLevelModel
      .findByIdAndUpdate(id, updateStudentKnowledgeLevelDto, { new: true })
      .exec();
    if (!updatedKnowledgeLevel) {
      throw new NotFoundException(
        `StudentKnowledgeLevel with ID ${id} not found`,
      );
    }
    return updatedKnowledgeLevel;
  }

  async remove(id: string): Promise<StudentKnowledgeLevel> {
    const deletedKnowledgeLevel = await this.studentKnowledgeLevelModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedKnowledgeLevel) {
      throw new NotFoundException(
        `StudentKnowledgeLevel with ID ${id} not found`,
      );
    }
    return deletedKnowledgeLevel;
  }
}
