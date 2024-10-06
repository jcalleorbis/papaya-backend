import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Buyer } from 'src/buyer/schemas/buyer.schema';

export type BuyerReportTypeDocument = HydratedDocument<BuyerReportType>;

@Schema({ timestamps: true })
export class BuyerReportType extends Document {
  @Prop()
  report_type: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'buyer' })
  buyer: Buyer;
}

export const BuyerReportTypeSchema =
  SchemaFactory.createForClass(BuyerReportType);
