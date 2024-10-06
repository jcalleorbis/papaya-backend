import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Tutor } from 'src/tutor/schemas/tutor.schema';

@Schema({ timestamps: true })
export class TutorAvailability extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  tutor: Tutor;

  @Prop({ default: Date.now })
  start_time: Date;

  @Prop({ default: Date.now })
  end_time: Date;

  @Prop()
  week_days: string;
}

export const TutorAvailabilitySchema =
  SchemaFactory.createForClass(TutorAvailability);
