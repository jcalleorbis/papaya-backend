import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Account } from 'src/account/schemas/account.schema';
import { School } from 'src/school/schemas/school.schema';
import { Subject } from 'src/subject/schemas/subject.schema';

export type ProgramDocument = HydratedDocument<Program>;

@Schema({ timestamps: true })
export class Program extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account' })
  account: Account;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'School' })
  school: School;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' })
  subject: Subject;

  @Prop()
  name: string;

  @Prop({ type: Date })
  start_date: Date;

  @Prop({ type: Date })
  end_date: Date;

  @Prop()
  status: string;

  @Prop()
  total_hours: number;

  @Prop()
  executed_hours: number;
}

export const ProgramSchema = SchemaFactory.createForClass(Program);
