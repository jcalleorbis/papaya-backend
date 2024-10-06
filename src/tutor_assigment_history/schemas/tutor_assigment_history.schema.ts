import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Tutor } from 'src/tutor/schemas/tutor.schema';
import { TutorAssignment } from 'src/tutor_assignment/schemas/tutor_assignment.schema';
import { User } from 'src/user/schemas/user.schema';

@Schema({ timestamps: true })
export class TutorAssigmentHistory extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TutorAssignment' })
  assigment: TutorAssignment;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  previous_tutor: Tutor;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  new_tutor: Tutor;

  @Prop({ default: Date.now })
  change_date: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  changed_by: User;

  @Prop()
  reason: string;
}

export const TutorAssigmentHistorySchema = SchemaFactory.createForClass(
  TutorAssigmentHistory,
);
