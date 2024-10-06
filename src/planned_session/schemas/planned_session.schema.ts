import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Schedule } from 'src/schedule/schemas/schedule.schema';

export type PlannedSessionDocument = HydratedDocument<PlannedSession>;

@Schema({ timestamps: true })
export class PlannedSession extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' })
  schedule: Schedule;

  @Prop({ type: Date })
  session_date: Date;

  @Prop()
  start_time: string;

  @Prop()
  end_time: string;

  @Prop()
  status: string;
}

export const PlannedSessionSchema =
  SchemaFactory.createForClass(PlannedSession);
