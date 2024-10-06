import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStandardDto } from './dto/create-standard.dto';
import { UpdateStandardDto } from './dto/update-standard.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Standard } from './schemas/standard.schema';

@Injectable()
export class StandardService {
  constructor(
    @InjectModel(Standard.name) private readonly StandardModel: Model<Standard>,
  ) {}

  async create(createStandardDto: CreateStandardDto): Promise<Standard> {
    const createdCriteria = new this.StandardModel(createStandardDto);
    return createdCriteria.save();
  }

  async findAll(): Promise<Standard[]> {
    return this.StandardModel.find().exec();
  }

  async findOne(id: string): Promise<Standard> {
    const criteria = await this.StandardModel.findById(id).exec();
    if (!criteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return criteria;
  }

  async update(
    id: string,
    updateStandardDto: UpdateStandardDto,
  ): Promise<Standard> {
    const updatedCriteria = await this.StandardModel.findByIdAndUpdate(
      id,
      updateStandardDto,
      { new: true },
    ).exec();
    if (!updatedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return updatedCriteria;
  }

  async remove(id: string): Promise<Standard> {
    const deletedCriteria =
      await this.StandardModel.findByIdAndDelete(id).exec();
    if (!deletedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return deletedCriteria;
  }
}
