import { Module } from '@nestjs/common';
import { DiagnosticTestExerciseService } from './diagnostic_test_exercise.service';
import { DiagnosticTestExerciseController } from './diagnostic_test_exercise.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DiagnosticTestExercise,
  DiagnosticTestExerciseSchema,
} from './schemas/diagnostic_test_exercise.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DiagnosticTestExercise.name,
        schema: DiagnosticTestExerciseSchema,
      },
    ]),
  ],
  controllers: [DiagnosticTestExerciseController],
  providers: [DiagnosticTestExerciseService],
})
export class DiagnosticTestExerciseModule {}
