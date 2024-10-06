import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Tutor } from 'src/tutor/schemas/tutor.schema';
import { TutorScoringCriteria } from 'src/tutor_scoring_criteria/schemas/tutor_scoring_criteria.schema';

@Schema({ timestamps: true })
export class TutorScore extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  tutor: Tutor;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TutorScoringCriteria' })
  criteria: TutorScoringCriteria;

  @Prop()
  score: number;

  @Prop()
  date: Date;
}

export const TutorScoreSchema = SchemaFactory.createForClass(TutorScore);
