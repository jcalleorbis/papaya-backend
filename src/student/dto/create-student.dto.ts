import { IsMongoId, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly gender: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly actual_grade: number;
  @IsMongoId()
  readonly school: string;
  @IsMongoId()
  readonly user: string;
}
