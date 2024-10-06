import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Session } from 'inspector/promises';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type TicketDocument = HydratedDocument<Ticket>;

@Schema({ timestamps: true })
export class Ticket extends Document {
  @Prop()
  issue_type: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Session' })
  session: Session;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  reporter: User;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
