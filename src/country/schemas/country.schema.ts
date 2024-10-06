import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type CountryDocument = HydratedDocument<Country>;

@Schema({ timestamps: true })
export class Country extends Document {
  @Prop()
  name: string;

  @Prop()
  code: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
