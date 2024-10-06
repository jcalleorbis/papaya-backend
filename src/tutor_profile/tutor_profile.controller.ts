import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TutorProfileService } from './tutor_profile.service';
import { CreateTutorProfileDto } from './dto/create-tutor_profile.dto';
import { UpdateTutorProfileDto } from './dto/update-tutor_profile.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tutor Profile')
@ApiBearerAuth()
@Controller('tutor-profile')
export class TutorProfileController {
  constructor(private readonly tutorProfileService: TutorProfileService) {}

  @Post()
  create(@Body() createTutorProfileDto: CreateTutorProfileDto) {
    return this.tutorProfileService.create(createTutorProfileDto);
  }

  @Get()
  findAll() {
    return this.tutorProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorProfileService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorProfileDto: UpdateTutorProfileDto,
  ) {
    return this.tutorProfileService.update(id, updateTutorProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorProfileService.remove(id);
  }
}
