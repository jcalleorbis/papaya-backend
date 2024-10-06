import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Group } from 'src/group/schemas/group.schema';

export type ScheduleDocument = HydratedDocument<Schedule>;

@Schema({ timestamps: true })
export class Schedule extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'group' })
  group: Group;

  @Prop()
  start_date: string;

  @Prop()
  end_date: string;

  @Prop()
  start_time: string;

  @Prop()
  end_time: string;

  @Prop()
  week_days: string;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
