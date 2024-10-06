import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TutorPenaltyService } from './tutor_penalty.service';
import { TutorPenaltyController } from './tutor_penalty.controller';
import {
  TutorPenalty,
  TutorPenaltySchema,
} from './schemas/tutor_penalty.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutorPenalty.name, schema: TutorPenaltySchema },
    ]),
  ],
  controllers: [TutorPenaltyController],
  providers: [TutorPenaltyService],
})
export class TutorPenaltyModule {}
