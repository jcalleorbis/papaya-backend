import { IsMongoId, IsNumber, IsString } from 'class-validator';

export class CreateTutorDto {
  @IsMongoId()
  user: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  email: string;

  @IsString()
  phone_number: string;

  @IsNumber()
  is_on_hold: number;
}
