import { IsMongoId } from 'class-validator';

export class CreateGroupDto {
  @IsMongoId()
  readonly program: string;
  @IsMongoId()
  readonly grade: string;
  @IsMongoId()
  readonly lenguage: string;
  @IsMongoId()
  readonly contact: string;
}
