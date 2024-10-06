import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorAssigmentHistoryDto } from './create-tutor_assigment_history.dto';

export class UpdateTutorAssigmentHistoryDto extends PartialType(
  CreateTutorAssigmentHistoryDto,
) {}
