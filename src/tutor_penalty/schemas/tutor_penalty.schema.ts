import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Tutor } from 'src/tutor/schemas/tutor.schema';
import { PenaltyType } from 'src/penalty_type/schemas/penalty_type.schema';

@Schema({ timestamps: true })
export class TutorPenalty extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  tutor: Tutor;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'PenaltyType' })
  penalty_type: PenaltyType;

  @Prop({ type: Date })
  date: Date;
}

export const TutorPenaltySchema = SchemaFactory.createForClass(TutorPenalty);
