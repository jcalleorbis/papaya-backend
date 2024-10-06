import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassQualityController } from './class_quality.controller';
import { ClassQualityService } from './class_quality.service';
import {
  ClassQuality,
  ClassQualitySchema,
} from './schemas/class_quality.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ClassQuality.name, schema: ClassQualitySchema },
    ]),
  ],
  controllers: [ClassQualityController],
  providers: [ClassQualityService],
})
export class ClassQualityModule {}
