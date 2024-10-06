import { IsMongoId, IsString } from 'class-validator';

export class CreateDiagnosticTestExerciseDto {
  @IsString()
  readonly student_answer: string;
  @IsString()
  readonly is_correct: string;
  @IsMongoId()
  readonly exercise: string;
  @IsMongoId()
  readonly diagnosticTest: string;
}
