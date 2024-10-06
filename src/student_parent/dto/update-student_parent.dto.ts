import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentParentDto } from './create-student_parent.dto';

export class UpdateStudentParentDto extends PartialType(CreateStudentParentDto) {}
