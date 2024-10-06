import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCurriculumExerciseDto } from './dto/create-curriculum_exercise.dto';
import { UpdateCurriculumExerciseDto } from './dto/update-curriculum_exercise.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CurriculumExercise } from './schemas/curriculum_exercise.schema';

@Injectable()
export class CurriculumExerciseService {
  constructor(
    @InjectModel(CurriculumExercise.name)
    private readonly curriculumExerciseModel: Model<CurriculumExercise>,
  ) {}

  create(
    CreateCurriculumExerciseDto: CreateCurriculumExerciseDto,
  ): Promise<CurriculumExercise> {
    const CreateCurriculumExercise = new this.curriculumExerciseModel(
      CreateCurriculumExerciseDto,
    );
    return CreateCurriculumExercise.save();
  }

  findAll() {
    return this.curriculumExerciseModel.find().exec();
  }

  async findOne(id: string) {
    const curriculumExercise = await this.curriculumExerciseModel
      .findById(id)
      .exec();
    if (!curriculumExercise) {
      throw new NotFoundException(`CurriculumExercise with ID ${id} not found`);
    }
    return curriculumExercise;
  }

  async update(
    id: string,
    updateCurriculumExerciseDto: UpdateCurriculumExerciseDto,
  ) {
    const updatedCurriculumExercise = await this.curriculumExerciseModel
      .findByIdAndUpdate(id, updateCurriculumExerciseDto, { new: true })
      .exec();
    if (!updatedCurriculumExercise) {
      throw new NotFoundException(`CurriculumExercise with ID ${id} not found`);
    }
    return updatedCurriculumExercise;
  }

  async remove(id: string) {
    const deletedCurriculumExercise = await this.curriculumExerciseModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedCurriculumExercise) {
      throw new NotFoundException(`CurriculumExercise with ID ${id} not found`);
    }
    return deletedCurriculumExercise;
  }
}
