import { IsString, IsNumber } from 'class-validator';

export class CreateTutorScoringCriteriaDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  weight: number;

  @IsNumber()
  is_must_be: number;

  @IsNumber()
  order: number;
}
