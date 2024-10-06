import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Subject } from 'src/subject/schemas/subject.schema';

@Schema({ timestamps: true })
export class Topic extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' })
  subject: Subject;

  @Prop()
  name: string;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
