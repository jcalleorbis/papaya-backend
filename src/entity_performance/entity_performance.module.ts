import { Module } from '@nestjs/common';
import { EntityPerformanceService } from './entity_performance.service';
import { EntityPerformanceController } from './entity_performance.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  EntityPerformance,
  EntityPerformanceSchema,
} from './schemas/entity_performance.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EntityPerformance.name, schema: EntityPerformanceSchema },
    ]),
  ],
  controllers: [EntityPerformanceController],
  providers: [EntityPerformanceService],
})
export class EntityPerformanceModule {}
