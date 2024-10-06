import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CurriculumDocument = Curriculum & Document;

@Schema({ timestamps: true })
export class Curriculum extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  version: number;
}

export const CurriculumSchema = SchemaFactory.createForClass(Curriculum);
