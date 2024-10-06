import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Parent } from 'src/parent/schemas/parent.schema';
import { Student } from 'src/student/schemas/student.schemas';
export type StudentParentDocument = HydratedDocument<StudentParent>;

@Schema({ timestamps: true })
export class StudentParent extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  student: Student;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Parent' })
  parent: Parent;
}

export const StudentParentSchema = SchemaFactory.createForClass(StudentParent);
