import { IsDate, IsMongoId, IsString } from 'class-validator';

export class CreateTutorExperienceDto {
  @IsString()
  experience_type: string;

  @IsString()
  description: string;

  @IsDate()
  start_date: Date;

  @IsDate()
  end_date: Date;

  @IsMongoId()
  tutor: string;
}
