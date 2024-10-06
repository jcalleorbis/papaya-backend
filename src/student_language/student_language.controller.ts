import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { Student_languageService } from './student_language.service';
import { CreateStudentLanguageDto } from './dto/create-student_language.dto';
import { UpdateStudentLanguageDto } from './dto/update-student_language.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Student Language')
@ApiBearerAuth()
@Controller('student-language')
export class StudentLanguageController {
  constructor(
    private readonly studentLanguageService: Student_languageService,
  ) {}

  @Post()
  create(@Body() createStudentLanguageDto: CreateStudentLanguageDto) {
    return this.studentLanguageService.create(createStudentLanguageDto);
  }

  @Get()
  findAll() {
    return this.studentLanguageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentLanguageService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentLanguageDto: UpdateStudentLanguageDto,
  ) {
    return this.studentLanguageService.update(id, updateStudentLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentLanguageService.remove(id);
  }
}
