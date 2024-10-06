import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';
import { Tutor } from './schemas/tutor.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TutorService {
  constructor(
    @InjectModel(Tutor.name) private readonly TutorModel: Model<Tutor>,
  ) {}

  async create(createTutorDto: CreateTutorDto): Promise<Tutor> {
    const createdCriteria = new this.TutorModel(createTutorDto);
    return createdCriteria.save();
  }

  async findAll(): Promise<Tutor[]> {
    return this.TutorModel.find().exec();
  }

  async findOne(id: string): Promise<Tutor> {
    const criteria = await this.TutorModel.findById(id).exec();
    if (!criteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return criteria;
  }

  async update(id: string, updateTutorDto: UpdateTutorDto): Promise<Tutor> {
    const updatedCriteria = await this.TutorModel.findByIdAndUpdate(
      id,
      updateTutorDto,
      { new: true },
    ).exec();
    if (!updatedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return updatedCriteria;
  }

  async remove(id: string): Promise<Tutor> {
    const deletedCriteria = await this.TutorModel.findByIdAndDelete(id).exec();
    if (!deletedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return deletedCriteria;
  }
}
