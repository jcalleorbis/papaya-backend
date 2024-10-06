import { IsMongoId, IsNumber, IsString } from 'class-validator';

export class CreateSessionDto {
  @IsNumber()
  readonly session_number: number;
  @IsString()
  readonly status: string;
  @IsString()
  readonly session_type: string;
  @IsMongoId()
  readonly plannedSession: string;
  @IsMongoId()
  readonly tutor: string;
}
