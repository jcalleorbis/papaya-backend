import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Template extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const TemplateSchema = SchemaFactory.createForClass(Template);
