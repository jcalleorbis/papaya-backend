import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Contract } from 'src/contract/schemas/contract.schema';
import { Program } from 'src/program/schemas/program.schema';

export type ProgramContractDocument = HydratedDocument<ProgramContract>;

@Schema({ timestamps: true })
export class ProgramContract extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Program' })
  program: Program;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Contract' })
  contract: Contract;

  @Prop()
  allocated_hours: string;

  @Prop()
  executed_hours: string;
}

export const ProgramContractSchema =
  SchemaFactory.createForClass(ProgramContract);
