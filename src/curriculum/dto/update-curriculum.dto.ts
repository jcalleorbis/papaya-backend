import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateCurriculumDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsInt()
  @IsOptional()
  version?: number;
}
