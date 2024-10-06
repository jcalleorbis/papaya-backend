import { IsMongoId, IsNumber, IsDateString } from 'class-validator';

export class CreateTutorStudentHistoryDto {
  @IsMongoId()
  tutor: string;

  @IsMongoId()
  student: string;

  @IsNumber()
  total_sessions: number;

  @IsDateString()
  last_session_date: string;
}
