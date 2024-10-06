import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type ExerciseDocument = HydratedDocument<exercise>;

@Schema({ timestamps: true })
export class exercise extends Document {
  @Prop()
  problem: string;

  @Prop()
  result: string;

  @Prop()
  content_link: string;
}

export const exerciseSchema = SchemaFactory.createForClass(exercise);
