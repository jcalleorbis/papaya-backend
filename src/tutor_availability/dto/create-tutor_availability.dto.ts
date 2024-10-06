import { IsDate, IsMongoId, IsString } from 'class-validator';
export class CreateTutorAvailabilityDto {
  @IsMongoId()
  tutor: string;

  @IsDate()
  start_time: Date;

  @IsDate()
  end_time: Date;

  @IsString()
  week_days: string;
}
