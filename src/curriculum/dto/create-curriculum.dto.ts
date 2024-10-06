import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateCurriculumDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  version: number;
}
