import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Session } from 'src/session/schemas/session.schema';
import { Standard } from 'src/standard/schemas/standard.schema';

export type RubricDocument = HydratedDocument<Rubric>;

@Schema({ timestamps: true })
export class Rubric extends Document {
  @Prop()
  overall_score: string;

  @Prop()
  final_result: string;

  @Prop()
  progress_feedback: string;

  @Prop()
  behaviour_feedback: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Session' })
  session: Session;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Standard' })
  standard: Standard;
}

export const RubricSchema = SchemaFactory.createForClass(Rubric);
