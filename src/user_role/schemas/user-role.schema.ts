import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserRoleDocument = UserRole & Document;

@Schema({ timestamps: true })
export class UserRole extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Object })
  permissions: object;
}

export const UserRoleSchema = SchemaFactory.createForClass(UserRole);
