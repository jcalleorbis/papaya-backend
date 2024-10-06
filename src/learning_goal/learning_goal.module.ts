import { Module } from '@nestjs/common';
import { LearningGoalService } from './learning_goal.service';
import { LearningGoalController } from './learning_goal.controller';
import {
  LearningGoal,
  LearningGoalSchema,
} from './schemas/learning_goal.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LearningGoal.name, schema: LearningGoalSchema },
    ]),
  ],
  controllers: [LearningGoalController],
  providers: [LearningGoalService],
})
export class LearningGoalModule {}
