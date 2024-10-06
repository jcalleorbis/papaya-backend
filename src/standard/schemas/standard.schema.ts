import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Topic } from 'src/topic/schemas/topic.schema';

@Schema({ timestamps: true })
export class Standard extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' })
  topic: Topic;

  @Prop()
  name: string;

  @Prop()
  concept: string;
}

export const StandardSchema = SchemaFactory.createForClass(Standard);
