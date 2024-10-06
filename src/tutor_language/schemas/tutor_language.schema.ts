import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Language } from 'src/language/schemas/language.schema';
import { Tutor } from 'src/tutor/schemas/tutor.schema';

export type TutorLanguageDocument = HydratedDocument<TutorLanguage>;

@Schema({ timestamps: true })
export class TutorLanguage extends Document {
  @Prop()
  proficiency_level: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  tutor: Tutor;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Language' })
  language: Language;
}

export const TutorLanguageSchema = SchemaFactory.createForClass(TutorLanguage);
