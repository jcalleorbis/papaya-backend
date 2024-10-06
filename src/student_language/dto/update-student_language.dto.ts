import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentLanguageDto } from './create-student_language.dto';

export class UpdateStudentLanguageDto extends PartialType(CreateStudentLanguageDto) {}
