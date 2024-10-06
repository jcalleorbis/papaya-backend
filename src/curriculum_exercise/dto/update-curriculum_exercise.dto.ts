import { PartialType } from '@nestjs/mapped-types';
import { CreateCurriculumExerciseDto } from './create-curriculum_exercise.dto';

export class UpdateCurriculumExerciseDto extends PartialType(
  CreateCurriculumExerciseDto,
) {}
