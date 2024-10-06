import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TutorStudentHistoryService } from './tutor_student_history.service';
import { TutorStudentHistoryController } from './tutor_student_history.controller';
import {
  TutorStudentHistory,
  TutorStudentHistorySchema,
} from './schemas/tutor_student_history.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutorStudentHistory.name, schema: TutorStudentHistorySchema },
    ]),
  ],
  controllers: [TutorStudentHistoryController],
  providers: [TutorStudentHistoryService],
})
export class TutorStudentHistoryModule {}
