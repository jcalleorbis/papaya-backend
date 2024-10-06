import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorScoringCriteriaDto } from './create-tutor_scoring_criterion.dto';

export class UpdateTutorScoringCriteriaDto extends PartialType(
  CreateTutorScoringCriteriaDto,
) {}
