import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Curriculum } from 'src/curriculum/schemas/curriculum.schema';
import { Student } from 'src/student/schemas/student.schemas';
import { Subject } from 'src/subject/schemas/subject.schema';

export type DiagnosticTestDocument = HydratedDocument<DiagnosticTest>;

@Schema({ timestamps: true })
export class DiagnosticTest extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  student: Student;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' })
  subject: Subject;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Curriculum' })
  curriculum: Curriculum;

  @Prop({ type: Date })
  date: Date;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  result: object;
}

export const DiagnosticTestSchema =
  SchemaFactory.createForClass(DiagnosticTest);
