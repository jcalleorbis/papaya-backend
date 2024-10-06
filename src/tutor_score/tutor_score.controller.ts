import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TutorScoreService } from './tutor_score.service';
import { CreateTutorScoreDto } from './dto/create-tutor_score.dto';
import { UpdateTutorScoreDto } from './dto/update-tutor_score.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tutor Score')
@ApiBearerAuth()
@Controller('tutor-score')
export class TutorScoreController {
  constructor(private readonly tutorScoreService: TutorScoreService) {}

  @Post()
  create(@Body() createTutorScoreDto: CreateTutorScoreDto) {
    return this.tutorScoreService.create(createTutorScoreDto);
  }

  @Get()
  findAll() {
    return this.tutorScoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorScoreService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorScoreDto: UpdateTutorScoreDto,
  ) {
    return this.tutorScoreService.update(id, updateTutorScoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorScoreService.remove(id);
  }
}
