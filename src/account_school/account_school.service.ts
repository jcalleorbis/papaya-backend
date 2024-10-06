import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountSchoolDto } from './dto/create-account_school.dto';
import { UpdateAccountSchoolDto } from './dto/update-account_school.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AccountSchool } from './schemas/account_school.schema';
import { Model } from 'mongoose';

@Injectable()
export class AccountSchoolService {
  constructor(
    @InjectModel(AccountSchool.name) private aschoolModel: Model<AccountSchool>,
  ) {}
  create(createAccountSchoolDto: CreateAccountSchoolDto) {
    const createAccountSchool = new this.aschoolModel(createAccountSchoolDto);
    return createAccountSchool.save();
  }

  findAll() {
    return this.aschoolModel.find().exec();
  }

  async findOne(id: number) {
    const AccountSchool = await this.aschoolModel.findById(id).exec();
    if (!AccountSchool) {
      throw new NotFoundException(`AccountSchool with ID ${id} not found`);
    }
    return AccountSchool;
  }

  async update(id: number, updateAccountSchoolDto: UpdateAccountSchoolDto) {
    const updatedAccountSchool = await this.aschoolModel
      .findByIdAndUpdate(id, updateAccountSchoolDto, { new: true })
      .exec();
    if (!updatedAccountSchool) {
      throw new NotFoundException(`AccountSchool with ID ${id} not found`);
    }
    return updatedAccountSchool;
  }

  async remove(id: number) {
    const deletedAccountSchool = await this.aschoolModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedAccountSchool) {
      throw new NotFoundException(`AccountSchool with ID ${id} not found`);
    }
    return deletedAccountSchool;
  }
}
