import { IsDate, IsMongoId, IsString } from 'class-validator';

export class CreatePlannedSessionDto {
  @IsMongoId()
  readonly schedule: string;
  @IsDate()
  readonly session_date: Date;
  @IsString()
  readonly start_time: string;
  @IsString()
  readonly end_time: string;
  @IsString()
  readonly status: string;
}
