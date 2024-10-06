import { PartialType } from '@nestjs/mapped-types';
import { CreateDiagnosticTestExerciseDto } from './create-diagnostic_test_exercise.dto';

export class UpdateDiagnosticTestExerciseDto extends PartialType(
  CreateDiagnosticTestExerciseDto,
) {}
