import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Currency extends Document {
  @Prop()
  code: string;

  @Prop()
  name: string;
}

export const CurrencySchema = SchemaFactory.createForClass(Currency);
