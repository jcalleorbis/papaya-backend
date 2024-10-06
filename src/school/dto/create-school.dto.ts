import { IsMongoId, IsString } from 'class-validator';

export class CreateSchoolDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly school_level: string;
  @IsMongoId()
  readonly district: string;
}
