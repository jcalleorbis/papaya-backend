import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRubricDto } from './dto/create-rubric.dto';
import { UpdateRubricDto } from './dto/update-rubric.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rubric } from './entities/rubric.entity';
import { Model } from 'mongoose';

@Injectable()
export class RubricService {
  constructor(@InjectModel(Rubric.name) private rubricModel: Model<Rubric>) {}

  create(createRubricDto: CreateRubricDto) {
    const createdRubric = new this.rubricModel(createRubricDto);
    return createdRubric.save();
  }

  findAll() {
    return this.rubricModel.find().exec();
  }

  async findOne(id: string) {
    const rubric = await this.rubricModel.findById(id).exec();
    if (!rubric) {
      throw new NotFoundException(`Rubric with ID ${id} not found`);
    }
    return rubric;
  }

  async update(id: string, updateRubricDto: UpdateRubricDto) {
    const updatedRubric = await this.rubricModel
      .findByIdAndUpdate(id, updateRubricDto, { new: true })
      .exec();
    if (!updatedRubric) {
      throw new NotFoundException(`Rubric with ID ${id} not found`);
    }
    return updatedRubric;
  }

  async remove(id: string) {
    const deletedRubric = await this.rubricModel.findByIdAndDelete(id).exec();
    if (!deletedRubric) {
      throw new NotFoundException(`Rubric with ID ${id} not found`);
    }
    return deletedRubric;
  }
}
