import { IsDate, IsMongoId, IsString } from 'class-validator';

export class CreateTutorAssigmentHistoryDto {
  @IsMongoId()
  assigment: string;

  @IsMongoId()
  previous_tutor: string;

  @IsMongoId()
  new_tutor: string;

  @IsDate()
  change_date: Date;

  @IsMongoId()
  changed_by: string;

  @IsString()
  reason: string;
}
