import { IsMongoId } from 'class-validator';

export class CreateAccountContractDto {
  @IsMongoId()
  readonly account: string;
  @IsMongoId()
  readonly contract: string;
}
