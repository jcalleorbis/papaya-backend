import { Module } from '@nestjs/common';
import { PerformanceMetricService } from './performance_metric.service';
import { PerformanceMetricController } from './performance_metric.controller';
import {
  PerformanceMetric,
  PerformanceMetricSchema,
} from './schemas/performance_metric.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PerformanceMetric.name, schema: PerformanceMetricSchema },
    ]),
  ],
  controllers: [PerformanceMetricController],
  providers: [PerformanceMetricService],
})
export class PerformanceMetricModule {}
