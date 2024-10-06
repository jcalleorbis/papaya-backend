import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { PlannedSession } from 'src/planned_session/schemas/planned_session.schema';
import { Tutor } from 'src/tutor/schemas/tutor.schema';
import { User } from 'src/user/schemas/user.schema';

export type TutorAssignmentDocument = HydratedDocument<TutorAssignment>;

@Schema({ timestamps: true })
export class TutorAssignment extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'PlannedSession' })
  planned_session: PlannedSession;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  tutor: Tutor;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  assigned: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  approved: User;

  @Prop({ type: Date })
  assignment_date: Date;

  @Prop()
  status: string;

  @Prop({ type: Date })
  approval_date: Date;

  @Prop()
  is_override: number;

  @Prop()
  override_reason: string;
}

export const TutorAssignmentSchema =
  SchemaFactory.createForClass(TutorAssignment);
