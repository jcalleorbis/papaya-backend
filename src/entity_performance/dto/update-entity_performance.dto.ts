import { PartialType } from '@nestjs/mapped-types';
import { CreateEntityPerformanceDto } from './create-entity_performance.dto';

export class UpdateEntityPerformanceDto extends PartialType(
  CreateEntityPerformanceDto,
) {}
