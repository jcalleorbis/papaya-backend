import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { RubricService } from './rubric.service';
import { CreateRubricDto } from './dto/create-rubric.dto';
import { UpdateRubricDto } from './dto/update-rubric.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Rubric')
@ApiBearerAuth()
@Controller('rubric')
export class RubricController {
  constructor(private readonly rubricService: RubricService) {}

  @Post()
  create(@Body() createRubricDto: CreateRubricDto) {
    return this.rubricService.create(createRubricDto);
  }

  @Get()
  findAll() {
    return this.rubricService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rubricService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRubricDto: UpdateRubricDto) {
    return this.rubricService.update(id, updateRubricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rubricService.remove(id);
  }
}
