import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePenaltyTypeDto } from './dto/create-penalty_type.dto';
import { UpdatePenaltyTypeDto } from './dto/update-penalty_type.dto';
import { PenaltyType } from './schemas/penalty_type.schema';

@Injectable()
export class PenaltyTypeService {
  constructor(
    @InjectModel(PenaltyType.name) private penaltyTypeModel: Model<PenaltyType>,
  ) {}

  async create(
    createPenaltyTypeDto: CreatePenaltyTypeDto,
  ): Promise<PenaltyType> {
    const createdPenaltyType = new this.penaltyTypeModel(createPenaltyTypeDto);
    return createdPenaltyType.save();
  }

  async findAll(): Promise<PenaltyType[]> {
    return this.penaltyTypeModel.find().exec();
  }

  async findOne(id: string): Promise<PenaltyType> {
    const penaltyType = await this.penaltyTypeModel.findById(id).exec();
    if (!penaltyType) {
      throw new NotFoundException(`PenaltyType with ID ${id} not found`);
    }
    return penaltyType;
  }

  async update(
    id: string,
    updatePenaltyTypeDto: UpdatePenaltyTypeDto,
  ): Promise<PenaltyType> {
    const updatedPenaltyType = await this.penaltyTypeModel
      .findByIdAndUpdate(id, updatePenaltyTypeDto, { new: true })
      .exec();
    if (!updatedPenaltyType) {
      throw new NotFoundException(`PenaltyType with ID ${id} not found`);
    }
    return updatedPenaltyType;
  }

  async remove(id: string): Promise<void> {
    const result = await this.penaltyTypeModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`PenaltyType with ID ${id} not found`);
    }
  }
}
