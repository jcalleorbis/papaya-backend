import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Curriculum } from 'src/curriculum/schemas/curriculum.schema';

@Schema({ timestamps: true })
export class Subject extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Curriculum' })
  curriculum: Curriculum;

  @Prop()
  name: string;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
