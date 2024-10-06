import { IsDate, IsMongoId, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsMongoId()
  readonly buyer: string;
  @IsString()
  readonly status: string;
  @IsDate()
  readonly start_date: Date;
  @IsDate()
  readonly end_date: Date;
}
