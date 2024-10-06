import { IsMongoId, IsString } from 'class-validator';

export class CreateStudentLanguageDto {
  @IsString()
  readonly proficiency_level: string;
  @IsMongoId()
  readonly session: string;
  @IsMongoId()
  readonly language: string;
}
