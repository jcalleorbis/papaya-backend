import { IsString } from 'class-validator';

export class CreateExerciseDto {
  @IsString()
  readonly problem: string;
  @IsString()
  readonly result: string;
  @IsString()
  readonly content_link: string;
}
