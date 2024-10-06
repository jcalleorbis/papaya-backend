import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { State } from 'src/state/schemas/state.schema';

export type RegionDocument = HydratedDocument<Region>;

@Schema({ timestamps: true })
export class Region extends Document {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'State' })
  state: State;
}

export const RegionSchema = SchemaFactory.createForClass(Region);
