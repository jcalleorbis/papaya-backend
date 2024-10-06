import { IsString } from 'class-validator';

export class CreateParentDto {
  @IsString()
  readonly user: string;
  @IsString()
  readonly name: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly phone_number: string;
}
