import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Language } from 'src/language/schemas/language.schema';
import { Student } from 'src/student/schemas/student.schemas';

export type StudentLanguageDocument = HydratedDocument<StudentLanguage>;

@Schema({ timestamps: true })
export class StudentLanguage extends Document {
  @Prop()
  proficiency_level: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  student_id: Student;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Language' })
  language: Language;
}

export const StudentLanguageSchema =
  SchemaFactory.createForClass(StudentLanguage);
