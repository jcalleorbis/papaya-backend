import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Country } from 'src/country/schemas/country.schema';

export type StateDocument = HydratedDocument<State>;

@Schema({ timestamps: true })
export class State extends Document {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Country' })
  country: Country;
}

export const StateSchema = SchemaFactory.createForClass(State);
