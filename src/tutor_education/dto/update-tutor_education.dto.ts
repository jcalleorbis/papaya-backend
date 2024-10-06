import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorEducationDto } from './create-tutor_education.dto';

export class UpdateTutorEducationDto extends PartialType(CreateTutorEducationDto) {}
