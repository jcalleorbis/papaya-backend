import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TutorPreferenceService } from './tutor_preference.service';
import { CreateTutorPreferenceDto } from './dto/create-tutor_preference.dto';
import { UpdateTutorPreferenceDto } from './dto/update-tutor_preference.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tutor Preference')
@ApiBearerAuth()
@Controller('tutor-preference')
export class TutorPreferenceController {
  constructor(
    private readonly tutorPreferenceService: TutorPreferenceService,
  ) {}

  @Post()
  create(@Body() createTutorPreferenceDto: CreateTutorPreferenceDto) {
    return this.tutorPreferenceService.create(createTutorPreferenceDto);
  }

  @Get()
  findAll() {
    return this.tutorPreferenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorPreferenceService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorPreferenceDto: UpdateTutorPreferenceDto,
  ) {
    return this.tutorPreferenceService.update(id, updateTutorPreferenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorPreferenceService.remove(id);
  }
}
