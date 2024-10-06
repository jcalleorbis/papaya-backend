import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Currency } from 'src/currency/schemas/currency.schema';

@Schema({ timestamps: true })
export class Contract extends Document {
  @Prop()
  name: string;

  @Prop({ default: Date.now })
  start_date: Date;

  @Prop({ default: Date.now })
  end_date: Date;

  @Prop()
  value: number;

  @Prop()
  discount: number;

  @Prop()
  total_hours: number;

  @Prop()
  used_hours: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Currency' })
  currency: Currency;

  @Prop()
  status: string;

  @Prop({ default: Date.now })
  grace_period_end: Date;
}

export const ContractSchema = SchemaFactory.createForClass(Contract);
