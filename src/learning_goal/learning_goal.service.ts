import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLearningGoalDto } from './dto/create-learning_goal.dto';
import { UpdateLearningGoalDto } from './dto/update-learning_goal.dto';
import { LearningGoal } from './schemas/learning_goal.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LearningGoalService {
  constructor(
    @InjectModel(LearningGoal.name)
    private learningGoalModel: Model<LearningGoal>,
  ) {}

  create(createLearningGoalDto: CreateLearningGoalDto) {
    const createdLearningGoal = new this.learningGoalModel(
      createLearningGoalDto,
    );
    return createdLearningGoal.save();
  }

  findAll() {
    return this.learningGoalModel.find().exec();
  }

  async findOne(id: string) {
    const LearningGoal = await this.learningGoalModel.findById(id).exec();
    if (!LearningGoal) {
      throw new NotFoundException(`LearningGoal with ID ${id} not found`);
    }
    return LearningGoal;
  }

  async update(id: string, updateLearningGoalDto: UpdateLearningGoalDto) {
    const updatedLearningGoal = await this.learningGoalModel
      .findByIdAndUpdate(id, updateLearningGoalDto, { new: true })
      .exec();
    if (!updatedLearningGoal) {
      throw new NotFoundException(`LearningGoal with ID ${id} not found`);
    }
    return updatedLearningGoal;
  }

  async remove(id: string) {
    const deletedlearningGoal = await this.learningGoalModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedlearningGoal) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return deletedlearningGoal;
  }
}
