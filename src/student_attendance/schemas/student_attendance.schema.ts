import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Session } from 'src/session/schemas/session.schema';
import { Student } from 'src/student/schemas/student.schemas';

export type StudentAttendanceDocument = HydratedDocument<StudentAttendance>;

@Schema({ timestamps: true })
export class StudentAttendance extends Document {
  @Prop()
  start_time: Date;

  @Prop()
  end_time: Date;

  @Prop()
  status: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Session' })
  session: Session;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  student: Student;
}

export const StudentAttendanceSchema =
  SchemaFactory.createForClass(StudentAttendance);
