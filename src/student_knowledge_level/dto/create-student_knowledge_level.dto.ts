import { IsString, IsMongoId } from 'class-validator';

export class CreateStudentKnowledgeLevelDto {
  @IsMongoId()
  student: string;

  @IsMongoId()
  subject: string;

  @IsString()
  knowledge_level: string;
}
