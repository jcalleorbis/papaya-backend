import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Student } from 'src/student/schemas/student.schemas';
import { Subject } from 'src/subject/schemas/subject.schema';

@Schema({ timestamps: true })
export class StudentKnowledgeLevel extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  student: Student;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' })
  subject: Subject;

  @Prop()
  knowledge_level: string;

  @Prop({ default: Date.now })
  last_updated: Date;
}

export const StudentKnowledgeLevelSchema = SchemaFactory.createForClass(
  StudentKnowledgeLevel,
);
