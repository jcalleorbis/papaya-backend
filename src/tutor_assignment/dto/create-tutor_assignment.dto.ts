import { IsDate, IsMongoId, IsNumber, IsString } from 'class-validator';

export class CreateTutorAssignmentDto {
  @IsMongoId()
  readonly planned_session: string;
  @IsMongoId()
  readonly tutor: string;
  @IsMongoId()
  readonly assigned: string;
  @IsMongoId()
  readonly approved: string;
  @IsDate()
  readonly assignment_date: Date;
  @IsString()
  readonly status: string;
  @IsDate()
  readonly approval_date: Date;
  @IsNumber()
  readonly is_override: number;
  @IsString()
  readonly override_reason: string;
}
