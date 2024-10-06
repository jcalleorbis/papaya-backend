import { IsMongoId, IsNumber, IsString } from 'class-validator';

export class CreateTutorGroupRelationDto {
  @IsString()
  readonly status: string;
  @IsNumber()
  readonly priority: number;
  @IsMongoId()
  readonly tutor: string;
  @IsMongoId()
  readonly group: string;
}
