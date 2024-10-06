import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type parentDocument = HydratedDocument<Parent>;

@Schema({ timestamps: true })
export class Parent extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone_number: string;
}

export const ParentSchema = SchemaFactory.createForClass(Parent);
