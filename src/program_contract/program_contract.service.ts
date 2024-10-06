import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProgramContractDto } from './dto/create-program_contract.dto';
import { UpdateProgramContractDto } from './dto/update-program_contract.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProgramContract } from './schemas/program_contract.schema';

@Injectable()
export class ProgramContractService {
  constructor(
    @InjectModel(ProgramContract.name) private pcModel: Model<ProgramContract>,
  ) {}
  create(createProgramContractDto: CreateProgramContractDto) {
    const createProgramContract = new this.pcModel(createProgramContractDto);
    return createProgramContract.save();
  }

  async findAll() {
    return this.pcModel.find().exec();
  }

  async findOne(id: string) {
    const PC = await this.pcModel.findById(id).exec();
    if (!PC) {
      throw new NotFoundException(`PC with ID ${id} not found`);
    }
    return PC;
  }

  async update(id: string, updateProgramContractDto: UpdateProgramContractDto) {
    const updatedPC = await this.pcModel
      .findByIdAndUpdate(id, updateProgramContractDto, { new: true })
      .exec();
    if (!updatedPC) {
      throw new NotFoundException(`PC with ID ${id} not found`);
    }
    return updatedPC;
  }

  async remove(id: string) {
    const deletedPC = await this.pcModel.findByIdAndDelete(id).exec();
    if (!deletedPC) {
      throw new NotFoundException(`PC with ID ${id} not found`);
    }
    return deletedPC;
  }
}
