import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGamificationRewardDto } from './dto/create-gamification_reward.dto';
import { UpdateGamificationRewardDto } from './dto/update-gamification_reward.dto';
import { Reward } from './schemas/gamification_reward.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class GamificationRewardService {
  constructor(@InjectModel(Reward.name) private rewardModel: Model<Reward>) {}
  create(createGamificationRewardDto: CreateGamificationRewardDto) {
    const createReward = new this.rewardModel(createGamificationRewardDto);
    return createReward.save();
  }

  findAll() {
    return this.rewardModel.find().exec();
  }

  async findOne(id: string) {
    const Reward = await this.rewardModel.findById(id).exec();
    if (!Reward) {
      throw new NotFoundException(`Reward with ID ${id} not found`);
    }
    return Reward;
  }

  async update(
    id: string,
    updateGamificationRewardDto: UpdateGamificationRewardDto,
  ) {
    const updatedReward = await this.rewardModel
      .findByIdAndUpdate(id, updateGamificationRewardDto, { new: true })
      .exec();
    if (!updatedReward) {
      throw new NotFoundException(`Reward with ID ${id} not found`);
    }
    return updatedReward;
  }

  async remove(id: string) {
    const deletedReward = await this.rewardModel.findByIdAndDelete(id).exec();
    if (!deletedReward) {
      throw new NotFoundException(`Reward with ID ${id} not found`);
    }
    return deletedReward;
  }
}
