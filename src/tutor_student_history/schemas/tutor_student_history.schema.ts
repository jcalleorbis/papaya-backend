import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Tutor } from 'src/tutor/schemas/tutor.schema';
import { Student } from 'src/student/schemas/student.schemas';

@Schema({ timestamps: true })
export class TutorStudentHistory extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  tutor: Tutor;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  student: Student;

  @Prop()
  total_sessions: number;

  @Prop()
  last_session_date: Date;
}

export const TutorStudentHistorySchema =
  SchemaFactory.createForClass(TutorStudentHistory);
