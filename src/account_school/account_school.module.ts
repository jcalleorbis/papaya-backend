import { Module } from '@nestjs/common';
import { AccountSchoolService } from './account_school.service';
import { AccountSchoolController } from './account_school.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AccountSchool,
  AccountSchoolSchema,
} from './schemas/account_school.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AccountSchool.name, schema: AccountSchoolSchema },
    ]),
  ],
  controllers: [AccountSchoolController],
  providers: [AccountSchoolService],
})
export class AccountSchoolModule {}
