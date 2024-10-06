import { IsMongoId, IsString } from 'class-validator';

export class CreateTutorLanguageDto {
  @IsString()
  readonly proficiency_level: string;
  @IsMongoId()
  readonly tutor: string;
  @IsMongoId()
  readonly language: string;
}
