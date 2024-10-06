import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorStudentHistoryDto } from './create-tutor_student_history.dto';

export class UpdateTutorStudentHistoryDto extends PartialType(CreateTutorStudentHistoryDto) {}
