import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './schemas/account.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name)
    private AccountModel: Model<Account>,
  ) {}

  create(CreateaccountDto: CreateAccountDto) {
    const CreateAccountDto = new this.AccountModel(CreateaccountDto);
    return CreateAccountDto.save();
  }

  findAll() {
    return this.AccountModel.find().exec();
  }

  async findOne(id: number) {
    const Account = await this.AccountModel.findById(id).exec();
    if (!Account) {
      throw new NotFoundException(`Account with ID ${id} not found`);
    }
    return Account;
  }

  async update(id: number, UpdateAccountDto: UpdateAccountDto) {
    const UpdateAccount = await this.AccountModel.findByIdAndUpdate(
      id,
      UpdateAccountDto,
      { new: true },
    ).exec();
    if (!UpdateAccount) {
      throw new NotFoundException(`Account with ID ${id} not found`);
    }
    return UpdateAccountDto;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
