import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Account } from 'src/account/schemas/account.schema';
import { Contract } from 'src/contract/schemas/contract.schema';

export type AccountContractDocument = HydratedDocument<AccountContract>;

@Schema({ timestamps: true })
export class AccountContract extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account' })
  account: Account;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Contract' })
  contract: Contract;
}

export const AccountContractSchema =
  SchemaFactory.createForClass(AccountContract);
