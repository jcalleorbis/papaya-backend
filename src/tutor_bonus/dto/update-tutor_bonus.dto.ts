import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorBonusDto } from './create-tutor_bonus.dto';

export class UpdateTutorBonusDto extends PartialType(CreateTutorBonusDto) {}
