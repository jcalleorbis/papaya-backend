import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Tutor } from 'src/tutor/schemas/tutor.schema';

@Schema({ timestamps: true })
export class TutorExperience extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  tutor: Tutor;
  @Prop()
  experience_type: string;
  @Prop()
  description: string;
  @Prop()
  start_date: Date;
  @Prop()
  end_date: Date;
}

export const TutorExperienceSchema =
  SchemaFactory.createForClass(TutorExperience);
