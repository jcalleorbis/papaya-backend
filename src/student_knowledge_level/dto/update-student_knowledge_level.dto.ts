import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentKnowledgeLevelDto } from './create-student_knowledge_level.dto';

export class UpdateStudentKnowledgeLevelDto extends PartialType(
  CreateStudentKnowledgeLevelDto,
) {}
