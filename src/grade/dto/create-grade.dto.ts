import { IsString } from 'class-validator';

export class CreateGradeDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly level: string;
}
