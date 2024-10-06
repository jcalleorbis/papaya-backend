import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { InjectModel } from '@nestjs/mongoose';
import { exercise } from './schemas/exercise.schemas';
import { Model } from 'mongoose';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectModel(exercise.name) private exerciseModel: Model<exercise>,
  ) {}

  create(createExerciseDto: CreateExerciseDto) {
    const createdExercise = new this.exerciseModel(createExerciseDto);
    return createdExercise.save();
  }

  findAll() {
    return this.exerciseModel.find().exec();
  }

  async findOne(id: string) {
    const exercise = await this.exerciseModel.findById(id).exec();
    if (!exercise) {
      throw new NotFoundException(`Exercise with ID ${id} not found`);
    }
    return exercise;
  }

  async update(id: string, updateExerciseDto: UpdateExerciseDto) {
    const updatedExercise = await this.exerciseModel
      .findByIdAndUpdate(id, updateExerciseDto, { new: true })
      .exec();
    if (!updatedExercise) {
      throw new NotFoundException(`Exercise with ID ${id} not found`);
    }
    return updatedExercise;
  }

  async remove(id: string) {
    const deletedExercise = await this.exerciseModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedExercise) {
      throw new NotFoundException(`Exercise with ID ${id} not found`);
    }
    return deletedExercise;
  }
}
