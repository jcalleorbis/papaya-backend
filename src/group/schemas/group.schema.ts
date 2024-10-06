import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Contact } from 'src/contact/schemas/contact.schemas';
import { Grade } from 'src/grade/schemas/grade.schema';
import { Language } from 'src/language/schemas/language.schema';
import { Program } from 'src/program/schemas/program.schema';

export type GroupDocument = HydratedDocument<Group>;

@Schema({ timestamps: true })
export class Group extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'program' })
  program: Program;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'grade' })
  grade: Grade;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'language' })
  language: Language;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'contact' })
  contact: Contact;
}

export const GroupSchema = SchemaFactory.createForClass(Group);
