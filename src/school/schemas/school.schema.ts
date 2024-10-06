import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { District } from 'src/district/entities/district.entity';

export type SchoolDocument = HydratedDocument<School>;

@Schema({ timestamps: true })
export class School extends Document {
  @Prop()
  name: string;

  @Prop()
  school_level: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'District' })
  district: District;
}

export const SchoolSchema = SchemaFactory.createForClass(School);
