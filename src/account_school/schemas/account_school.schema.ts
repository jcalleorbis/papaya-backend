import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Account } from 'src/account/entities/account.entity';
import { School } from 'src/school/entities/school.entity';

export type AccountSchoolDocument = HydratedDocument<AccountSchool>;

@Schema({ timestamps: true })
export class AccountSchool extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account' })
  account: Account;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'School' })
  school: School;
}

export const AccountSchoolSchema = SchemaFactory.createForClass(AccountSchool);
