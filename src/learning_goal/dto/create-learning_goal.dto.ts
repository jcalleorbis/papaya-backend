import { IsMongoId, IsString } from 'class-validator';

export class CreateLearningGoalDto {
  @IsString()
  readonly description: string;
  @IsString()
  readonly target_date: string;
  @IsMongoId()
  readonly student: string;
  @IsMongoId()
  readonly subject: string;
}
