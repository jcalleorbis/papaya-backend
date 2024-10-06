import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TutorExperienceService } from './tutor_experience.service';
import { CreateTutorExperienceDto } from './dto/create-tutor_experience.dto';
import { UpdateTutorExperienceDto } from './dto/update-tutor_experience.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tutor Experience')
@ApiBearerAuth()
@Controller('tutor-experience')
export class TutorExperienceController {
  constructor(
    private readonly tutorExperienceService: TutorExperienceService,
  ) {}

  @Post()
  create(@Body() createTutorExperienceDto: CreateTutorExperienceDto) {
    return this.tutorExperienceService.create(createTutorExperienceDto);
  }

  @Get()
  findAll() {
    return this.tutorExperienceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorExperienceService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorExperienceDto: UpdateTutorExperienceDto,
  ) {
    return this.tutorExperienceService.update(id, updateTutorExperienceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorExperienceService.remove(id);
  }
}
