import { Module } from '@nestjs/common';
import { TutorScoreService } from './tutor_score.service';
import { TutorScoreController } from './tutor_score.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TutorScore, TutorScoreSchema } from './schemas/tutor_score.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutorScore.name, schema: TutorScoreSchema },
    ]),
  ],
  controllers: [TutorScoreController],
  providers: [TutorScoreService],
})
export class TutorScoreModule {}
