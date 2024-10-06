import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class PerformanceMetric extends Document {
  @Prop()
  metric_name: string;

  @Prop()
  description: string;

  @Prop()
  metric_type: string;
}

export const PerformanceMetricSchema =
  SchemaFactory.createForClass(PerformanceMetric);
