import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Region } from 'src/region/schemas/region.schema';

export type DiscrictDocument = HydratedDocument<District>;

@Schema({ timestamps: true })
export class District extends Document {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Region' })
  region: Region;
}

export const DistrictSchema = SchemaFactory.createForClass(District);
