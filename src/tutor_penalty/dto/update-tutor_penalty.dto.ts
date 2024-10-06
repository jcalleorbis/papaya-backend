import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorPenaltyDto } from './create-tutor_penalty.dto';

export class UpdateTutorPenaltyDto extends PartialType(CreateTutorPenaltyDto) {}
