import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { GamificationRewardService } from './gamification_reward.service';
import { CreateGamificationRewardDto } from './dto/create-gamification_reward.dto';
import { UpdateGamificationRewardDto } from './dto/update-gamification_reward.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Gamification Reward')
@ApiBearerAuth()
@Controller('gamification-reward')
export class GamificationRewardController {
  constructor(
    private readonly gamificationRewardService: GamificationRewardService,
  ) {}

  @Post()
  create(@Body() createGamificationRewardDto: CreateGamificationRewardDto) {
    return this.gamificationRewardService.create(createGamificationRewardDto);
  }

  @Get()
  findAll() {
    return this.gamificationRewardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamificationRewardService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateGamificationRewardDto: UpdateGamificationRewardDto,
  ) {
    return this.gamificationRewardService.update(
      id,
      updateGamificationRewardDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamificationRewardService.remove(id);
  }
}
