import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';
import { UserRole } from 'src/user_role/schemas/user-role.schema';

export type UserRoleAssignmentDocument = HydratedDocument<UserRoleAssignment>;

@Schema({ timestamps: true })
export class UserRoleAssignment extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserRole' })
  role: UserRole;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const UserRoleAssignmentSchema =
  SchemaFactory.createForClass(UserRoleAssignment);
