import { IsDate, IsMongoId, IsString } from 'class-validator';
export class CreateTutorAttendanceDto {
  @IsMongoId()
  session: string;

  @IsMongoId()
  tutor: string;

  @IsDate()
  start_time: Date;

  @IsDate()
  end_time: Date;

  @IsString()
  status: string;
}
