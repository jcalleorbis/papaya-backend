import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class TutorScoringCriteria extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true, type: Number })
  weight: number;

  @Prop({ required: true })
  is_must_be: number;

  @Prop({ type: Number })
  order: number;
}

export const TutorScoringCriteriaSchema =
  SchemaFactory.createForClass(TutorScoringCriteria);
