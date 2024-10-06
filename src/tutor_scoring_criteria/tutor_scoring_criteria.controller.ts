import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TutorScoringCriteriaService } from './tutor_scoring_criteria.service';
import { CreateTutorScoringCriteriaDto } from './dto/create-tutor_scoring_criterion.dto';
import { UpdateTutorScoringCriteriaDto } from './dto/update-tutor_scoring_criterion.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tutor Scoring Criteria')
@ApiBearerAuth()
@Controller('tutor-scoring-criteria')
export class TutorScoringCriteriaController {
  constructor(
    private readonly tutorScoringCriteriaService: TutorScoringCriteriaService,
  ) {}

  @Post()
  create(@Body() createTutorScoringCriteriaDto: CreateTutorScoringCriteriaDto) {
    return this.tutorScoringCriteriaService.create(
      createTutorScoringCriteriaDto,
    );
  }

  @Get()
  findAll() {
    return this.tutorScoringCriteriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorScoringCriteriaService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorScoringCriteriaDto: UpdateTutorScoringCriteriaDto,
  ) {
    return this.tutorScoringCriteriaService.update(
      id,
      updateTutorScoringCriteriaDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorScoringCriteriaService.remove(id);
  }
}
