import { IsMongoId, IsString } from 'class-validator';

export class CreateDistrictDto {
  @IsString()
  readonly name: string;

  @IsMongoId()
  readonly region: string;
}
