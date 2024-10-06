import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Tutor } from 'src/tutor/schemas/tutor.schema';

@Schema({ timestamps: true })
export class TutorAttendance extends Document {
  @Prop()
  session: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  tutor: Tutor;

  @Prop({ type: Date })
  start_time: Date;

  @Prop({ type: Date })
  end_time: Date;

  @Prop()
  status: string;
}

export const TutorAttendanceSchema =
  SchemaFactory.createForClass(TutorAttendance);
