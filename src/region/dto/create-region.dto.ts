import { IsMongoId, IsString } from 'class-validator';

export class CreateRegionDto {
  @IsString()
  readonly name: string;

  @IsMongoId()
  readonly state: string;
}
