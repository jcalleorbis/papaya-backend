import { Module } from '@nestjs/common';
import { CurriculumExerciseService } from './curriculum_exercise.service';
import { CurriculumExerciseController } from './curriculum_exercise.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CurriculumExercise,
  curriculum_exerciseSchema,
} from './schemas/curriculum_exercise.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CurriculumExercise.name, schema: curriculum_exerciseSchema },
    ]),
  ],
  controllers: [CurriculumExerciseController],
  providers: [CurriculumExerciseService],
})
export class CurriculumExerciseModule {}
