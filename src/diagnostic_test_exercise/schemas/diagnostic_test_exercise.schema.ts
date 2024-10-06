import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { DiagnosticTest } from 'src/diagnostic_test/schemas/diagnostic_test.schema';
import { Exercise } from 'src/exercise/entities/exercise.entity';

export type DiagnosticTestExerciseDocument =
  HydratedDocument<DiagnosticTestExercise>;

@Schema({ timestamps: true })
export class DiagnosticTestExercise extends Document {
  @Prop()
  student_answer: string;

  @Prop()
  is_correct: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' })
  exercise: Exercise;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'DiagnosticTest' })
  diagnosticTest: DiagnosticTest;
}

export const DiagnosticTestExerciseSchema = SchemaFactory.createForClass(
  DiagnosticTestExercise,
);
