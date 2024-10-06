import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Bonus } from 'src/bonus/schemas/bonus.schema';
import { Tutor } from 'src/tutor/schemas/tutor.schema';

@Schema({ timestamps: true })
export class TutorBonus extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  tutor: Tutor;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Bonus' })
  bonus: Bonus;

  @Prop({ default: Date.now })
  date_awarded: Date;
}

export const TutorBonusSchema = SchemaFactory.createForClass(TutorBonus);
