import { IsMongoId, IsString } from 'class-validator';

export class CreateSessionTemplateDto {
  @IsMongoId()
  readonly session: string;
  @IsString()
  readonly template: string;
}
