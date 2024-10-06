import { IsMongoId, IsString } from 'class-validator';
export class CreateGamificationRewardDto {
  @IsString()
  readonly type: string;
  @IsString()
  readonly points: string;
  @IsString()
  readonly earned_date: string;
  @IsMongoId()
  readonly student: string;
}
