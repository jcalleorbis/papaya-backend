import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDiagnosticTestExerciseDto } from './dto/create-diagnostic_test_exercise.dto';
import { UpdateDiagnosticTestExerciseDto } from './dto/update-diagnostic_test_exercise.dto';
import { InjectModel } from '@nestjs/mongoose';
import { DiagnosticTestExercise } from './schemas/diagnostic_test_exercise.schema';
import { Model } from 'mongoose';

@Injectable()
export class DiagnosticTestExerciseService {
  constructor(
    @InjectModel(DiagnosticTestExercise.name)
    private DiagnosticTestExerciseModel: Model<DiagnosticTestExercise>,
  ) {}

  create(createDiagnosticTestExerciseDto: CreateDiagnosticTestExerciseDto) {
    const createDiagnosticTestExercise = new this.DiagnosticTestExerciseModel(
      createDiagnosticTestExerciseDto,
    );
    return createDiagnosticTestExercise.save();
  }

  findAll() {
    return this.DiagnosticTestExerciseModel.find().exec();
  }

  async findOne(id: string) {
    const diagnosticTestExercise =
      await this.DiagnosticTestExerciseModel.findById(id).exec();
    if (!diagnosticTestExercise) {
      throw new NotFoundException(
        `DiagnosticTestExercise with ID ${id} not found`,
      );
    }
    return diagnosticTestExercise;
  }

  async update(
    id: string,
    updateDiagnosticTestExerciseDto: UpdateDiagnosticTestExerciseDto,
  ) {
    const updatedDiagnosticTestExercise =
      await this.DiagnosticTestExerciseModel.findByIdAndUpdate(
        id,
        updateDiagnosticTestExerciseDto,
        { new: true },
      ).exec();
    if (!updatedDiagnosticTestExercise) {
      throw new NotFoundException(
        `DiagnosticTestExercise with ID ${id} not found`,
      );
    }
    return updatedDiagnosticTestExercise;
  }

  async remove(id: string) {
    const deletedDiagnosticTestExercise =
      await this.DiagnosticTestExerciseModel.findByIdAndDelete(id).exec();
    if (!deletedDiagnosticTestExercise) {
      throw new NotFoundException(
        `DiagnosticTestExercise with ID ${id} not found`,
      );
    }
    return deletedDiagnosticTestExercise;
  }
}
