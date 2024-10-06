import { IsString } from 'class-validator';

export class loginAuthDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
