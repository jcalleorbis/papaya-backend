import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Curriculum } from 'src/curriculum/schemas/curriculum.schema';
import { exercise } from 'src/exercise/schemas/exercise.schemas';
import { Standard } from 'src/standard/schemas/standard.schema';

export type curriculum_exerciseDocument = HydratedDocument<CurriculumExercise>;

@Schema({ timestamps: true })
export class CurriculumExercise extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Curriculum' })
  curriculum: Curriculum;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' })
  exercise: exercise;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Standard' })
  standard: Standard;
}

export const curriculum_exerciseSchema =
  SchemaFactory.createForClass(CurriculumExercise);
