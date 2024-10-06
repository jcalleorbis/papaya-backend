import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type notificationDocument = HydratedDocument<Notification>;

@Schema({ timestamps: true })
export class Notification extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  type: string;

  @Prop()
  content: string;

  @Prop()
  send_time: string;

  @Prop()
  is_read: string;
}

export const notificationSchema = SchemaFactory.createForClass(Notification);
