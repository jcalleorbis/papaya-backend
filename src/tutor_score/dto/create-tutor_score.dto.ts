import { IsDate, IsMongoId, IsNumber } from 'class-validator';

export class CreateTutorScoreDto {
  @IsMongoId()
  tutor: string;

  @IsMongoId()
  criteria: string;

  @IsNumber()
  score: number;

  @IsDate()
  date: Date;
}
