import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TutorAssignmentService } from './tutor_assignment.service';
import { CreateTutorAssignmentDto } from './dto/create-tutor_assignment.dto';
import { UpdateTutorAssignmentDto } from './dto/update-tutor_assignment.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tutor Assignment')
@ApiBearerAuth()
@Controller('tutor-assignment')
export class TutorAssignmentController {
  constructor(
    private readonly tutorAssignmentService: TutorAssignmentService,
  ) {}

  @Post()
  create(@Body() createTutorAssignmentDto: CreateTutorAssignmentDto) {
    return this.tutorAssignmentService.create(createTutorAssignmentDto);
  }

  @Get()
  findAll() {
    return this.tutorAssignmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorAssignmentService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorAssignmentDto: UpdateTutorAssignmentDto,
  ) {
    return this.tutorAssignmentService.update(+id, updateTutorAssignmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorAssignmentService.remove(+id);
  }
}
