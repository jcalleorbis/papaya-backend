import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { StudentParentService } from './student_parent.service';
import { CreateStudentParentDto } from './dto/create-student_parent.dto';
import { UpdateStudentParentDto } from './dto/update-student_parent.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Student Parent')
@ApiBearerAuth()
@Controller('student-parent')
export class StudentParentController {
  constructor(private readonly studentParentService: StudentParentService) {}

  @Post()
  create(@Body() createStudentParentDto: CreateStudentParentDto) {
    return this.studentParentService.create(createStudentParentDto);
  }

  @Get()
  findAll() {
    return this.studentParentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentParentService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentParentDto: UpdateStudentParentDto,
  ) {
    return this.studentParentService.update(id, updateStudentParentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentParentService.remove(id);
  }
}
