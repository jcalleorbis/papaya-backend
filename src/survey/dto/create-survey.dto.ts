import { IsMongoId, IsString } from 'class-validator';

export class CreateSurveyDto {
  @IsString()
  readonly satisfaction_score: string;
  @IsString()
  readonly favorite_tutor: number;
  @IsString()
  readonly feedback: string;
  @IsMongoId()
  readonly session: string;
}
