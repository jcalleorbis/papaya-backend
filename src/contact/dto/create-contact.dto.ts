import { IsMongoId, IsString } from 'class-validator';

export class CreateContactDto {
  @IsMongoId()
  readonly user: string;
  @IsString()
  readonly name: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly phone: string;
  @IsString()
  readonly role: string;
}
