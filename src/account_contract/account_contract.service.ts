import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountContractDto } from './dto/create-account_contract.dto';
import { UpdateAccountContractDto } from './dto/update-account_contract.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountContract } from './schemas/account_contract.schemas';

@Injectable()
export class AccountContractService {
  AccountContractModel: any;
  constructor(
    @InjectModel(AccountContract.name) private acModel: Model<AccountContract>,
  ) {}
  create(createAccountContractDto: CreateAccountContractDto) {
    const createAccountContract = new this.acModel(createAccountContractDto);
    return createAccountContract.save();
  }

  findAll() {
    return this.acModel.find().exec();
  }

  async findOne(id: string) {
    const AccountContract = await this.acModel.findById(id).exec();
    if (!AccountContract) {
      throw new NotFoundException(`AccountContract with ID ${id} not found`);
    }
    return AccountContract;
  }

  async update(id: string, updateAccountContractDto: UpdateAccountContractDto) {
    const updatedAccountContract = await this.acModel
      .findByIdAndUpdate(id, updateAccountContractDto, { new: true })
      .exec();
    if (!updatedAccountContract) {
      throw new NotFoundException(`AccountContract with ID ${id} not found`);
    }
    return updatedAccountContract;
  }

  async remove(id: string) {
    const deletedAccountContract = await this.acModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedAccountContract) {
      throw new NotFoundException(`AccountContract with ID ${id} not found`);
    }
    return deletedAccountContract;
  }
}
