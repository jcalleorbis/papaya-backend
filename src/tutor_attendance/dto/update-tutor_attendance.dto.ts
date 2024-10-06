import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorAttendanceDto } from './create-tutor_attendance.dto';

export class UpdateTutorAttendanceDto extends PartialType(
  CreateTutorAttendanceDto,
) {}
