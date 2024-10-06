import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorPreferenceDto } from './create-tutor_preference.dto';

export class UpdateTutorPreferenceDto extends PartialType(
  CreateTutorPreferenceDto,
) {}
