import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TutorStudentHistoryService } from './tutor_student_history.service';
import { CreateTutorStudentHistoryDto } from './dto/create-tutor_student_history.dto';
import { UpdateTutorStudentHistoryDto } from './dto/update-tutor_student_history.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tutor Student History')
@ApiBearerAuth()
@Controller('tutor-student-history')
export class TutorStudentHistoryController {
  constructor(
    private readonly tutorStudentHistoryService: TutorStudentHistoryService,
  ) {}

  @Post()
  create(@Body() createTutorStudentHistoryDto: CreateTutorStudentHistoryDto) {
    return this.tutorStudentHistoryService.create(createTutorStudentHistoryDto);
  }

  @Get()
  findAll() {
    return this.tutorStudentHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorStudentHistoryService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorStudentHistoryDto: UpdateTutorStudentHistoryDto,
  ) {
    return this.tutorStudentHistoryService.update(
      id,
      updateTutorStudentHistoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorStudentHistoryService.remove(id);
  }
}
