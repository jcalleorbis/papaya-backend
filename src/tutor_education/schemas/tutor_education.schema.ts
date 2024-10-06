import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Tutor } from 'src/tutor/schemas/tutor.schema';

@Schema({ timestamps: true })
export class TutorEducation extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  tutor: Tutor;

  @Prop()
  education_level: string;

  @Prop()
  major: string;

  @Prop()
  institution: string;

  @Prop()
  graduation_year: number;
}

export const TutorEducationSchema =
  SchemaFactory.createForClass(TutorEducation);
