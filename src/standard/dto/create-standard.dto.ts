import { IsMongoId, IsString } from 'class-validator';

export class CreateStandardDto {
  @IsMongoId()
  topic: string;

  @IsString()
  name: string;

  @IsString()
  concept: string;
}
