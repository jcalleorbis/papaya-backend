import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './schemas/subject.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(Subject.name) private readonly SubjectModel: Model<Subject>,
  ) {}

  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const createdCriteria = new this.SubjectModel(createSubjectDto);
    return createdCriteria.save();
  }

  async findAll(): Promise<Subject[]> {
    return this.SubjectModel.find().exec();
  }

  async findOne(id: string): Promise<Subject> {
    const criteria = await this.SubjectModel.findById(id).exec();
    if (!criteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return criteria;
  }

  async update(
    id: string,
    updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    const updatedCriteria = await this.SubjectModel.findByIdAndUpdate(
      id,
      updateSubjectDto,
      { new: true },
    ).exec();
    if (!updatedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return updatedCriteria;
  }

  async remove(id: string): Promise<Subject> {
    const deletedCriteria =
      await this.SubjectModel.findByIdAndDelete(id).exec();
    if (!deletedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return deletedCriteria;
  }
}
