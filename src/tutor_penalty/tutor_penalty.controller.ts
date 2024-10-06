import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TutorPenaltyService } from './tutor_penalty.service';
import { CreateTutorPenaltyDto } from './dto/create-tutor_penalty.dto';
import { UpdateTutorPenaltyDto } from './dto/update-tutor_penalty.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tutor Penalty')
@ApiBearerAuth()
@Controller('tutor-penalty')
export class TutorPenaltyController {
  constructor(private readonly tutorPenaltyService: TutorPenaltyService) {}

  @Post()
  create(@Body() createTutorPenaltyDto: CreateTutorPenaltyDto) {
    return this.tutorPenaltyService.create(createTutorPenaltyDto);
  }

  @Get()
  findAll() {
    return this.tutorPenaltyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorPenaltyService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorPenaltyDto: UpdateTutorPenaltyDto,
  ) {
    return this.tutorPenaltyService.update(id, updateTutorPenaltyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorPenaltyService.remove(id);
  }
}
