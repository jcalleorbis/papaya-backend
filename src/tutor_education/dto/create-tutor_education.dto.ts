import { IsString, IsMongoId, IsNumber } from 'class-validator';

export class CreateTutorEducationDto {
  @IsMongoId()
  tutor: string;

  @IsString()
  education_level: string;

  @IsString()
  major: string;

  @IsString()
  institution: string;

  @IsNumber()
  graduation_year: number;
}
