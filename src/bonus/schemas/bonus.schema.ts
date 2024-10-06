import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type AuditLogDocument = HydratedDocument<Bonus>;
@Schema({ timestamps: true })
export class Bonus extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  amount: number;
}

export const BonusSchema = SchemaFactory.createForClass(Bonus);
