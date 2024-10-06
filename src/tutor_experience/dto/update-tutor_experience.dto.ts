import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorExperienceDto } from './create-tutor_experience.dto';

export class UpdateTutorExperienceDto extends PartialType(CreateTutorExperienceDto) {}
