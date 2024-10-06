import { IsDate, IsMongoId } from 'class-validator';
export class CreateTutorBonusDto {
  @IsMongoId()
  tutor: string;

  @IsMongoId()
  bonus: string;

  @IsDate()
  date_awarded: Date;
}
