import { IsString, IsMongoId, IsNumber, IsDate } from 'class-validator';

export class CreateTutorProfileDto {
  @IsMongoId()
  tutor: string;

  @IsString()
  tutor_status: string;

  @IsString()
  tutor_category: string;

  @IsNumber()
  tutor_attendance: number;

  @IsNumber()
  tutor_rubric_completion: number;

  @IsNumber()
  tutor_csat: number;

  @IsNumber()
  tutor_hours_worked: number;

  @IsNumber()
  tutor_penalties: number;

  @IsNumber()
  tutor_payrate: number;

  @IsDate()
  tutor_entrydate: string;
}
