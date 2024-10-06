import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorAssignmentDto } from './create-tutor_assignment.dto';

export class UpdateTutorAssignmentDto extends PartialType(CreateTutorAssignmentDto) {}
