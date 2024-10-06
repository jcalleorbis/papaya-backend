import { IsMongoId, IsString } from 'class-validator';

export class CreateTopicDto {
  @IsMongoId()
  subject: string;

  @IsString()
  name: string;
}
