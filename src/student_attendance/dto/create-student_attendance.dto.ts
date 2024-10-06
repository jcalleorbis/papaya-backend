import { IsMongoId, IsString } from 'class-validator';

export class CreateStudentAttendanceDto {
  @IsString()
  readonly start_time: Date;
  @IsString()
  readonly end_time: Date;
  @IsString()
  readonly status: string;
  @IsMongoId()
  readonly session: string;
  @IsMongoId()
  readonly student: string;
}
