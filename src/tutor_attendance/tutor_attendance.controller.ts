import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TutorAttendanceService } from './tutor_attendance.service';
import { CreateTutorAttendanceDto } from './dto/create-tutor_attendance.dto';
import { UpdateTutorAttendanceDto } from './dto/update-tutor_attendance.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tutor Attendance')
@ApiBearerAuth()
@Controller('tutor-attendance')
export class TutorAttendanceController {
  constructor(
    private readonly tutorAttendanceService: TutorAttendanceService,
  ) {}

  @Post()
  create(@Body() createTutorAttendanceDto: CreateTutorAttendanceDto) {
    return this.tutorAttendanceService.create(createTutorAttendanceDto);
  }

  @Get()
  findAll() {
    return this.tutorAttendanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorAttendanceService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorAttendanceDto: UpdateTutorAttendanceDto,
  ) {
    return this.tutorAttendanceService.update(id, updateTutorAttendanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorAttendanceService.remove(id);
  }
}
