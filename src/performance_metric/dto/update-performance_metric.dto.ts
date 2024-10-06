import { PartialType } from '@nestjs/mapped-types';
import { CreatePerformanceMetricDto } from './create-performance_metric.dto';

export class UpdatePerformanceMetricDto extends PartialType(
  CreatePerformanceMetricDto,
) {}
