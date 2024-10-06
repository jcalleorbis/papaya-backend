import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Group } from 'src/group/entities/group.entity';
import { Tutor } from 'src/tutor/schemas/tutor.schema';

export type TutorGroupRelationDocument = HydratedDocument<TutorGroupRelation>;

@Schema({ timestamps: true })
export class TutorGroupRelation extends Document {
  @Prop()
  status: string;

  @Prop()
  priority: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' })
  tutor: Tutor;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Group' })
  group: Group;
}

export const TutorGroupRelationSchema =
  SchemaFactory.createForClass(TutorGroupRelation);
