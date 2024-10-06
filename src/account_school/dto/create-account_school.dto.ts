import { IsMongoId } from 'class-validator';

export class CreateAccountSchoolDto {
  @IsMongoId()
  readonly account: string;
  @IsMongoId()
  readonly school: string;
}
