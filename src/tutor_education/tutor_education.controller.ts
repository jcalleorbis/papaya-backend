import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TutorEducationService } from './tutor_education.service';
import { CreateTutorEducationDto } from './dto/create-tutor_education.dto';
import { UpdateTutorEducationDto } from './dto/update-tutor_education.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tutor Education')
@ApiBearerAuth()
@Controller('tutor-education')
export class TutorEducationController {
  constructor(private readonly tutorEducationService: TutorEducationService) {}

  @Post()
  create(@Body() createTutorEducationDto: CreateTutorEducationDto) {
    return this.tutorEducationService.create(createTutorEducationDto);
  }

  @Get()
  findAll() {
    return this.tutorEducationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorEducationService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorEducationDto: UpdateTutorEducationDto,
  ) {
    return this.tutorEducationService.update(id, updateTutorEducationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorEducationService.remove(id);
  }
}
