import { IsMongoId, IsString } from 'class-validator';

export class CreateProgramDto {
  @IsMongoId()
  readonly account: string;
  @IsMongoId()
  readonly school: string;
  @IsMongoId()
  readonly subject: string;
  @IsString()
  readonly name: string;
  @IsString()
  readonly start_date: Date;
  @IsString()
  readonly end_date: Date;
  @IsString()
  readonly status: string;
  @IsString()
  readonly total_hours: number;
  @IsString()
  readonly executed_hours: number;
}
