import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDiagnosticTestDto } from './dto/create-diagnostic_test.dto';
import { UpdateDiagnosticTestDto } from './dto/update-diagnostic_test.dto';
import { InjectModel } from '@nestjs/mongoose';
import { DiagnosticTest } from './schemas/diagnostic_test.schema';
import { Model } from 'mongoose';

@Injectable()
export class DiagnosticTestService {
  constructor(
    @InjectModel(DiagnosticTest.name)
    private dianosticTestModel: Model<DiagnosticTest>,
  ) {}
  create(createDiagnosticTestDto: CreateDiagnosticTestDto) {
    const createDiagnosticTest = new this.dianosticTestModel(
      createDiagnosticTestDto,
    );
    return createDiagnosticTest.save();
  }

  findAll() {
    return this.dianosticTestModel.find().exec();
  }

  async findOne(id: number) {
    const DiagnosticTest = await this.dianosticTestModel.findById(id).exec();
    if (!DiagnosticTest) {
      throw new NotFoundException(`DiagnosticTest with ID ${id} not found`);
    }
    return DiagnosticTest;
  }

  async update(id: number, updateDiagnosticTestDto: UpdateDiagnosticTestDto) {
    const updatedDiagnosticTest = await this.dianosticTestModel
      .findByIdAndUpdate(id, updateDiagnosticTestDto, { new: true })
      .exec();
    if (!updatedDiagnosticTest) {
      throw new NotFoundException(`DiagnosticTest with ID ${id} not found`);
    }
    return updatedDiagnosticTest;
  }

  async remove(id: number) {
    const deletedDiagnosticTest = await this.dianosticTestModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedDiagnosticTest) {
      throw new NotFoundException(`DiagnosticTest with ID ${id} not found`);
    }
    return deletedDiagnosticTest;
  }
}
