import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { PlannedSession } from 'src/planned_session/schemas/planned_session.schema';
import { Tutor } from 'src/tutor/schemas/tutor.schema';

export type SessionDocument = HydratedDocument<Session>;

@Schema({ timestamps: true })
export class Session extends Document {
  @Prop()
  session_number: number;

  @Prop()
  status: string;

  @Prop()
  session_type: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'PlannedSession' })
  plannedSession: PlannedSession;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  tutor: Tutor;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
