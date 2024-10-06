import { PartialType } from '@nestjs/mapped-types';
import { CreateLearningGoalDto } from './create-learning_goal.dto';

export class UpdateLearningGoalDto extends PartialType(CreateLearningGoalDto) {}
