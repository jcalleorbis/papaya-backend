import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Tutor } from 'src/tutor/schemas/tutor.schema';
import { Currency } from 'src/currency/schemas/currency.schema';

@Schema({ timestamps: true })
export class TutorPaymentMethod extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  tutor: Tutor;

  @Prop()
  payment_type: string;

  @Prop({ type: Object, required: true })
  account_details: Record<string, any>;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Currency' })
  currency: Currency;
}

export const TutorPaymentMethodSchema =
  SchemaFactory.createForClass(TutorPaymentMethod);
