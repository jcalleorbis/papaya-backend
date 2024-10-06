import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type LanguageDocument = HydratedDocument<Language>;

@Schema({ timestamps: true })
export class Language extends Document {
  @Prop()
  name: string;

  @Prop()
  code: string;
}

export const LanguageSchema = SchemaFactory.createForClass(Language);
