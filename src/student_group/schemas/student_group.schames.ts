import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Group } from 'src/group/schemas/group.schema';
import { Student } from 'src/student/schemas/student.schemas';
export type StudentGroupDocument = HydratedDocument<StudentGroup>;

@Schema({ timestamps: true })
export class StudentGroup extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  student: Student;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Group' })
  group: Group;
}

export const StudentGroupSchema = SchemaFactory.createForClass(StudentGroup);
