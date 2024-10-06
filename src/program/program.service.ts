import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { Program } from './schemas/program.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProgramService {
  constructor(
    @InjectModel(Program.name) private programModel: Model<Program>,
  ) {}

  create(createProgramDto: CreateProgramDto) {
    const createdProgram = new this.programModel(createProgramDto);
    return createdProgram.save();
  }

  findAll() {
    return this.programModel.find().exec();
  }

  async findOne(id: number) {
    const program = await this.programModel.findById(id).exec();
    if (!program) {
      throw new NotFoundException(`Program with ID ${id} not found`);
    }
    return program;
  }

  async update(id: number, updateProgramDto: UpdateProgramDto) {
    const updatedProgram = await this.programModel
      .findByIdAndUpdate(id, updateProgramDto, { new: true })
      .exec();
    if (!updatedProgram) {
      throw new NotFoundException(`Program with ID ${id} not found`);
    }
    return updatedProgram;
  }

  async remove(id: number) {
    const deletedProgram = await this.programModel.findByIdAndDelete(id).exec();
    if (!deletedProgram) {
      throw new NotFoundException(`Program with ID ${id} not found`);
    }
    return deletedProgram;
  }
}
