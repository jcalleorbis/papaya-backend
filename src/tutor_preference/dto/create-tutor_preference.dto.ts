import { IsMongoId } from 'class-validator';

export class CreateTutorPreferenceDto {
  @IsMongoId()
  tutor: string;

  @IsMongoId()
  subject: string;

  @IsMongoId()
  grade: string;

  @IsMongoId()
  language: string;
}
