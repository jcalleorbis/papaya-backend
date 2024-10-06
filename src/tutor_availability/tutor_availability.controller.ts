import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TutorAvailabilityService } from './tutor_availability.service';
import { CreateTutorAvailabilityDto } from './dto/create-tutor_availability.dto';
import { UpdateTutorAvailabilityDto } from './dto/update-tutor_availability.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tutor Availability')
@ApiBearerAuth()
@Controller('tutor-availability')
export class TutorAvailabilityController {
  constructor(
    private readonly tutorAvailabilityService: TutorAvailabilityService,
  ) {}

  @Post()
  create(@Body() createTutorAvailabilityDto: CreateTutorAvailabilityDto) {
    return this.tutorAvailabilityService.create(createTutorAvailabilityDto);
  }

  @Get()
  findAll() {
    return this.tutorAvailabilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorAvailabilityService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorAvailabilityDto: UpdateTutorAvailabilityDto,
  ) {
    return this.tutorAvailabilityService.update(id, updateTutorAvailabilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorAvailabilityService.remove(id);
  }
}
