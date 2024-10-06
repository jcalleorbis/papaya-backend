import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorAvailabilityDto } from './create-tutor_availability.dto';

export class UpdateTutorAvailabilityDto extends PartialType(
  CreateTutorAvailabilityDto,
) {}
