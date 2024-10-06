import { IsMongoId } from 'class-validator';

export class CreateCurriculumExerciseDto {
  @IsMongoId()
  readonly curriculum: string;
  @IsMongoId()
  readonly exercise: string;
  @IsMongoId()
  readonly standard: string;
}
