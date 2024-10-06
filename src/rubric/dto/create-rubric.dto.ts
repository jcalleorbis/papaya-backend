import { IsMongoId, IsString } from 'class-validator';

export class CreateRubricDto {
  @IsString()
  readonly overall_score: string;
  @IsString()
  readonly final_result: string;
  @IsString()
  readonly progress_feedback: string;
  @IsString()
  readonly behaviour_feedback: string;
  @IsMongoId()
  readonly session: string;
  @IsMongoId()
  readonly standard: string;
}
