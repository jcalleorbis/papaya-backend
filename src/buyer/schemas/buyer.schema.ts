import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type buyerDocument = HydratedDocument<Buyer>;

@Schema({ timestamps: true })
export class Buyer extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  name: string;

  @Prop()
  buyer_type: string;
}

export const BuyerSchema = SchemaFactory.createForClass(Buyer);
