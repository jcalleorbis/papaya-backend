import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Session } from 'src/session/schemas/session.schema';
import { User } from 'src/user/schemas/user.schema';

export type ClassQualityDocument = HydratedDocument<ClassQuality>;

@Schema({ timestamps: true })
export class ClassQuality extends Document {
  @Prop()
  feedback: string;

  @Prop()
  score: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Session' })
  session: Session;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'evaluator' })
  evaluator: User;
}

export const ClassQualitySchema = SchemaFactory.createForClass(ClassQuality);
