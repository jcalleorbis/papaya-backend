import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

@Schema({ timestamps: true })
export class SystemSetting extends Document {
  @Prop()
  setting_key: string;

  @Prop()
  setting_value: string;

  @Prop()
  description: string;

  @Prop({ default: Date.now })
  last_updated: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  updated_by: User;
}

export const SystemSettingSchema = SchemaFactory.createForClass(SystemSetting);
