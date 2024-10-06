import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Student } from 'src/student/schemas/student.schemas';

export type RewardDocument = HydratedDocument<Reward>;

@Schema({ timestamps: true })
export class Reward extends Document {
  @Prop()
  type: string;

  @Prop()
  points: string;

  @Prop()
  earned_date: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  student: Student;
}

export const RewardSchema = SchemaFactory.createForClass(Reward);
