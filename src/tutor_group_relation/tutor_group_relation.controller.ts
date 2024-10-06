import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TutorGroupRelationService } from './tutor_group_relation.service';
import { CreateTutorGroupRelationDto } from './dto/create-tutor_group_relation.dto';
import { UpdateTutorGroupRelationDto } from './dto/update-tutor_group_relation.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tutor Group Relation')
@ApiBearerAuth()
@Controller('tutor-group-relation')
export class TutorGroupRelationController {
  constructor(
    private readonly tutorGroupRelationService: TutorGroupRelationService,
  ) {}

  @Post()
  create(@Body() createTutorGroupRelationDto: CreateTutorGroupRelationDto) {
    return this.tutorGroupRelationService.create(createTutorGroupRelationDto);
  }

  @Get()
  findAll() {
    return this.tutorGroupRelationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorGroupRelationService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorGroupRelationDto: UpdateTutorGroupRelationDto,
  ) {
    return this.tutorGroupRelationService.update(
      id,
      updateTutorGroupRelationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorGroupRelationService.remove(id);
  }
}
