import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Tutor } from 'src/tutor/schemas/tutor.schema';

@Schema({ timestamps: true })
export class TutorProfile extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  tutor: Tutor;

  @Prop()
  tutor_status: string;

  @Prop()
  tutor_category: string;

  @Prop()
  tutor_attendance: number;

  @Prop()
  tutor_rubric_completion: number;

  @Prop()
  tutor_csat: number;

  @Prop()
  tutor_hours_worked: number;

  @Prop()
  tutor_penalties: number;

  @Prop()
  tutor_payrate: number;

  @Prop({ type: Date })
  tutor_entrydate: Date;
}

export const TutorProfileSchema = SchemaFactory.createForClass(TutorProfile);
