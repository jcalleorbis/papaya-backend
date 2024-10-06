import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CurriculumExerciseService } from './curriculum_exercise.service';
import { CreateCurriculumExerciseDto } from './dto/create-curriculum_exercise.dto';
import { UpdateCurriculumExerciseDto } from './dto/update-curriculum_exercise.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Curriculum Exercise')
@ApiBearerAuth()
@Controller('curriculum-exercise')
export class CurriculumExerciseController {
  constructor(
    private readonly curriculumExerciseService: CurriculumExerciseService,
  ) {}

  @Post()
  create(@Body() createCurriculumExerciseDto: CreateCurriculumExerciseDto) {
    return this.curriculumExerciseService.create(createCurriculumExerciseDto);
  }

  @Get()
  findAll() {
    return this.curriculumExerciseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curriculumExerciseService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCurriculumExerciseDto: UpdateCurriculumExerciseDto,
  ) {
    return this.curriculumExerciseService.update(
      id,
      updateCurriculumExerciseDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curriculumExerciseService.remove(id);
  }
}
