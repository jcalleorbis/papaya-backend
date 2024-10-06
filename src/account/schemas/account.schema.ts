import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Buyer } from 'src/buyer/schemas/buyer.schema';

export type notificationDocument = HydratedDocument<Account>;

@Schema({ timestamps: true })
export class Account extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Buyer' })
  buyer: Buyer;

  @Prop()
  status: string;

  @Prop({ type: Date })
  start_date: Date;

  @Prop({ type: Date })
  end_date: Date;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
