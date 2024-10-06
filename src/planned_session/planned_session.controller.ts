import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PlannedSessionService } from './planned_session.service';
import { CreatePlannedSessionDto } from './dto/create-planned_session.dto';
import { UpdatePlannedSessionDto } from './dto/update-planned_session.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Planned Session')
@ApiBearerAuth()
@Controller('planned-session')
export class PlannedSessionController {
  constructor(private readonly plannedSessionService: PlannedSessionService) {}

  @Post()
  create(@Body() createPlannedSessionDto: CreatePlannedSessionDto) {
    return this.plannedSessionService.create(createPlannedSessionDto);
  }

  @Get()
  findAll() {
    return this.plannedSessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plannedSessionService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlannedSessionDto: UpdatePlannedSessionDto,
  ) {
    return this.plannedSessionService.update(id, updatePlannedSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plannedSessionService.remove(id);
  }
}
