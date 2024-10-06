import { Module } from '@nestjs/common';
import { GamificationRewardService } from './gamification_reward.service';
import { GamificationRewardController } from './gamification_reward.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Reward, RewardSchema } from './schemas/gamification_reward.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Reward.name, schema: RewardSchema }]),
  ],
  controllers: [GamificationRewardController],
  providers: [GamificationRewardService],
})
export class GamificationRewardModule {}
