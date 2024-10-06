import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Session } from 'src/session/schemas/session.schema';
import { Template } from 'src/template/schemas/template.schema';
export type SessionTemplateDocument = HydratedDocument<SessionTemplate>;

@Schema({ timestamps: true })
export class SessionTemplate extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Session' })
  session: Session;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Template' })
  template: Template;
}

export const SessionTemplateSchema =
  SchemaFactory.createForClass(SessionTemplate);
