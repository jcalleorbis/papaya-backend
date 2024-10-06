import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { LearningGoalService } from './learning_goal.service';
import { CreateLearningGoalDto } from './dto/create-learning_goal.dto';
import { UpdateLearningGoalDto } from './dto/update-learning_goal.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Learning Goal')
@ApiBearerAuth()
@Controller('learning-goal')
export class LearningGoalController {
  constructor(private readonly learningGoalService: LearningGoalService) {}

  @Post()
  create(@Body() createLearningGoalDto: CreateLearningGoalDto) {
    return this.learningGoalService.create(createLearningGoalDto);
  }

  @Get()
  findAll() {
    return this.learningGoalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.learningGoalService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateLearningGoalDto: UpdateLearningGoalDto,
  ) {
    return this.learningGoalService.update(id, updateLearningGoalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.learningGoalService.remove(id);
  }
}
