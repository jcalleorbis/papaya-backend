import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Group } from 'src/group/schemas/group.schema';
import { PerformanceMetric } from 'src/performance_metric/schemas/performance_metric.schema';
import { Session } from 'src/session/schemas/session.schema';
import { Student } from 'src/student/schemas/student.schemas';
import { Tutor } from 'src/tutor/schemas/tutor.schema';

export type EntityPerformanceDocument = HydratedDocument<EntityPerformance>;

@Schema({ timestamps: true })
export class EntityPerformance extends Document {
  @Prop()
  entity_type: string;

  @Prop()
  value: string;

  @Prop()
  date: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'PerformanceMetric' })
  performanceMetric: PerformanceMetric;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  student: Student;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  tutor: Tutor;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Session' })
  session: Session;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Group' })
  group: Group;
}

export const EntityPerformanceSchema =
  SchemaFactory.createForClass(EntityPerformance);
