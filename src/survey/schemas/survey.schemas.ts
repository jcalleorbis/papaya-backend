import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Session } from 'src/session/schemas/session.schema';

export type SurveyDocument = HydratedDocument<Survey>;

@Schema({ timestamps: true })
export class Survey extends Document {
  @Prop()
  satisfaction_score: number;

  @Prop()
  favorite_tutor: number;

  @Prop()
  feedback: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Session' })
  session: Session;
}

export const SurveySchema = SchemaFactory.createForClass(Survey);
