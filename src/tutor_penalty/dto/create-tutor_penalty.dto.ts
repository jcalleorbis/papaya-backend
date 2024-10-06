import { IsMongoId, IsDate } from 'class-validator';

export class CreateTutorPenaltyDto {
  @IsMongoId()
  tutor: string;

  @IsMongoId()
  penalty_type: string;

  @IsDate()
  date: Date;
}
