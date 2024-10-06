import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { EntityPerformanceService } from './entity_performance.service';
import { CreateEntityPerformanceDto } from './dto/create-entity_performance.dto';
import { UpdateEntityPerformanceDto } from './dto/update-entity_performance.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Entity Performance')
@ApiBearerAuth()
@Controller('entity-performance')
export class EntityPerformanceController {
  constructor(
    private readonly entityPerformanceService: EntityPerformanceService,
  ) {}

  @Post()
  create(@Body() createEntityPerformanceDto: CreateEntityPerformanceDto) {
    return this.entityPerformanceService.create(createEntityPerformanceDto);
  }

  @Get()
  findAll() {
    return this.entityPerformanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entityPerformanceService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEntityPerformanceDto: UpdateEntityPerformanceDto,
  ) {
    return this.entityPerformanceService.update(id, updateEntityPerformanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityPerformanceService.remove(id);
  }
}
