import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { StudentKnowledgeLevelService } from './student_knowledge_level.service';
import { CreateStudentKnowledgeLevelDto } from './dto/create-student_knowledge_level.dto';
import { UpdateStudentKnowledgeLevelDto } from './dto/update-student_knowledge_level.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Student Knowledge Level')
@ApiBearerAuth()
@Controller('student-knowledge-level')
export class StudentKnowledgeLevelController {
  constructor(
    private readonly studentKnowledgeLevelService: StudentKnowledgeLevelService,
  ) {}

  @Post()
  create(
    @Body() createStudentKnowledgeLevelDto: CreateStudentKnowledgeLevelDto,
  ) {
    return this.studentKnowledgeLevelService.create(
      createStudentKnowledgeLevelDto,
    );
  }

  @Get()
  findAll() {
    return this.studentKnowledgeLevelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentKnowledgeLevelService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentKnowledgeLevelDto: UpdateStudentKnowledgeLevelDto,
  ) {
    return this.studentKnowledgeLevelService.update(
      id,
      updateStudentKnowledgeLevelDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentKnowledgeLevelService.remove(id);
  }
}
