import { IsMongoId, IsString } from 'class-validator';

export class CreateSubjectDto {
  @IsMongoId()
  curriculum: string;

  @IsString()
  name: string;
}
