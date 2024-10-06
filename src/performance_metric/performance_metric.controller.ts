import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PerformanceMetricService } from './performance_metric.service';
import { CreatePerformanceMetricDto } from './dto/create-performance_metric.dto';
import { UpdatePerformanceMetricDto } from './dto/update-performance_metric.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Performance Metric')
@ApiBearerAuth()
@Controller('performance-metric')
export class PerformanceMetricController {
  constructor(
    private readonly performanceMetricService: PerformanceMetricService,
  ) {}

  @Post()
  create(@Body() createPerformanceMetricDto: CreatePerformanceMetricDto) {
    return this.performanceMetricService.create(createPerformanceMetricDto);
  }

  @Get()
  findAll() {
    return this.performanceMetricService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.performanceMetricService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePerformanceMetricDto: UpdatePerformanceMetricDto,
  ) {
    return this.performanceMetricService.update(id, updatePerformanceMetricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.performanceMetricService.remove(id);
  }
}
