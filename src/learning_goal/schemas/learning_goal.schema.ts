import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Student } from 'src/student/schemas/student.schemas';
import { Subject } from 'src/subject/schemas/subject.schema';

export type LearningGoalDocument = HydratedDocument<LearningGoal>;

@Schema({ timestamps: true })
export class LearningGoal extends Document {
  @Prop()
  description: string;

  @Prop()
  target_date: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  student: Student;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' })
  subject: Subject;
}

export const LearningGoalSchema = SchemaFactory.createForClass(LearningGoal);
