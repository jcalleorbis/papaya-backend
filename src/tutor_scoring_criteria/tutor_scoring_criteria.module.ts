import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TutorScoringCriteriaService } from './tutor_scoring_criteria.service';
import { TutorScoringCriteriaController } from './tutor_scoring_criteria.controller';
import {
  TutorScoringCriteria,
  TutorScoringCriteriaSchema,
} from './schemas/tutor_scoring_criteria.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutorScoringCriteria.name, schema: TutorScoringCriteriaSchema },
    ]),
  ],
  controllers: [TutorScoringCriteriaController],
  providers: [TutorScoringCriteriaService],
})
export class TutorScoringCriteriaModule {}
