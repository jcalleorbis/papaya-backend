import { IsDate, IsMongoId, IsString } from 'class-validator';

export class CreateScheduleDto {
  @IsMongoId()
  readonly group: string;
  @IsDate()
  readonly start_date: Date;
  @IsDate()
  readonly end_date: Date;
  @IsString()
  readonly start_time: string;
  @IsString()
  readonly end_time: string;
  @IsString()
  readonly week_days: string;
}
