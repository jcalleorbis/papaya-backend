import { IsMongoId, IsString } from 'class-validator';

export class CreateClassQualityDto {
  @IsMongoId()
  readonly session: string;
  @IsMongoId()
  readonly evaluator: string;
  @IsString()
  readonly feedback: string;
  @IsString()
  readonly score: string;
}
