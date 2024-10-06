import { Module } from '@nestjs/common';
import { TutorAssigmentHistoryService } from './tutor_assigment_history.service';
import { TutorAssigmentHistoryController } from './tutor_assigment_history.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TutorAssigmentHistory,
  TutorAssigmentHistorySchema,
} from './schemas/tutor_assigment_history.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutorAssigmentHistory.name, schema: TutorAssigmentHistorySchema },
    ]),
  ],
  controllers: [TutorAssigmentHistoryController],
  providers: [TutorAssigmentHistoryService],
})
export class TutorAssigmentHistoryModule {}
