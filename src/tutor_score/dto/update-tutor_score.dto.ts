import { PartialType } from '@nestjs/swagger';
import { CreateTutorScoreDto } from './create-tutor_score.dto';

export class UpdateTutorScoreDto extends PartialType(CreateTutorScoreDto) {}
