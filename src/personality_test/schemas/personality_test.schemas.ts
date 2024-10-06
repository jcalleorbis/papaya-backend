import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Student } from 'src/student/schemas/student.schemas';

export type PersonalityTestDocument = HydratedDocument<PersonalityTest>;

@Schema({ timestamps: true })
export class PersonalityTest extends Document {
  @Prop()
  learning_style_scores: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  student: Student;
}

export const PersonalityTestSchema =
  SchemaFactory.createForClass(PersonalityTest);
