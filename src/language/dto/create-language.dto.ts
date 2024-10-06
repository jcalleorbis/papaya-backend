import { IsString } from 'class-validator';

export class CreateLanguageDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly code: string;
}
