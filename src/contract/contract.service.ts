import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { Contract } from './schemas/contract.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ContractService {
  constructor(
    @InjectModel(Contract.name) private readonly ContractModel: Model<Contract>,
  ) {}

  async create(createContractDto: CreateContractDto): Promise<Contract> {
    const createdCriteria = new this.ContractModel(createContractDto);
    return createdCriteria.save();
  }

  async findAll(): Promise<Contract[]> {
    return this.ContractModel.find().exec();
  }

  async findOne(id: string): Promise<Contract> {
    const criteria = await this.ContractModel.findById(id).exec();
    if (!criteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return criteria;
  }

  async update(
    id: string,
    updateContractDto: UpdateContractDto,
  ): Promise<Contract> {
    const updatedCriteria = await this.ContractModel.findByIdAndUpdate(
      id,
      updateContractDto,
      { new: true },
    ).exec();
    if (!updatedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return updatedCriteria;
  }

  async remove(id: string): Promise<Contract> {
    const deletedCriteria =
      await this.ContractModel.findByIdAndDelete(id).exec();
    if (!deletedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return deletedCriteria;
  }
}
