import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { School } from 'src/school/schemas/school.schema';
import { User } from 'src/user/schemas/user.schema';

export type StudentDocument = HydratedDocument<Student>;

@Schema({ timestamps: true })
export class Student extends Document {
  @Prop()
  name: string;

  @Prop()
  gender: string;

  @Prop()
  email: string;

  @Prop()
  actual_grade: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'School' })
  school: School;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
