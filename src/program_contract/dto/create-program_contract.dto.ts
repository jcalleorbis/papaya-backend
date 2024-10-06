import { IsMongoId, IsString } from 'class-validator';

export class CreateProgramContractDto {
  @IsMongoId()
  readonly program: string;
  @IsMongoId()
  readonly contract: string;
  @IsString()
  readonly description: string;
  @IsString()
  readonly executed_hours: string;
}
