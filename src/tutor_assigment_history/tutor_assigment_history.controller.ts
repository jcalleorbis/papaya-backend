import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TutorAssigmentHistoryService } from './tutor_assigment_history.service';
import { CreateTutorAssigmentHistoryDto } from './dto/create-tutor_assigment_history.dto';
import { UpdateTutorAssigmentHistoryDto } from './dto/update-tutor_assigment_history.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tutor Assigment History')
@ApiBearerAuth()
@Controller('tutor-assigment-history')
export class TutorAssigmentHistoryController {
  constructor(
    private readonly tutorAssigmentHistoryService: TutorAssigmentHistoryService,
  ) {}

  @Post()
  create(
    @Body() createTutorAssigmentHistoryDto: CreateTutorAssigmentHistoryDto,
  ) {
    return this.tutorAssigmentHistoryService.create(
      createTutorAssigmentHistoryDto,
    );
  }

  @Get()
  findAll() {
    return this.tutorAssigmentHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorAssigmentHistoryService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorAssigmentHistoryDto: UpdateTutorAssigmentHistoryDto,
  ) {
    return this.tutorAssigmentHistoryService.update(
      id,
      updateTutorAssigmentHistoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorAssigmentHistoryService.remove(id);
  }
}
