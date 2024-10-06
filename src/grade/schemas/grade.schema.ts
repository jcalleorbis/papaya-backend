import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type GradeDocument = HydratedDocument<Grade>;

@Schema({ timestamps: true })
export class Grade extends Document {
  @Prop()
  name: string;

  @Prop()
  level: string;
}

export const GradeSchema = SchemaFactory.createForClass(Grade);
