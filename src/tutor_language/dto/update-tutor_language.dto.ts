import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorLanguageDto } from './create-tutor_language.dto';

export class UpdateTutorLanguageDto extends PartialType(
  CreateTutorLanguageDto,
) {}
