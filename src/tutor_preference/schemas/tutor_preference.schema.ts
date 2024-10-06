import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Tutor } from 'src/tutor/schemas/tutor.schema';
import { Subject } from 'src/subject/schemas/subject.schema';
import { Grade } from 'src/grade/schemas/grade.schema';
import { Language } from 'src/language/schemas/language.schema';

export type TutorPreferenceDocument = HydratedDocument<TutorPreference>;

@Schema({ timestamps: true })
export class TutorPreference extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor', required: true })
  tutor: Tutor;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  })
  subject: Subject;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Grade', required: true })
  grade: Grade;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Language',
    required: true,
  })
  language: Language;
}

export const TutorPreferenceSchema =
  SchemaFactory.createForClass(TutorPreference);
