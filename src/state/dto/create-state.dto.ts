import { IsMongoId, IsString } from 'class-validator';

export class CreateStateDto {
  @IsString()
  readonly name: string;
  @IsMongoId()
  readonly country: string;
}
