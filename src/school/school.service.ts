import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './entities/school.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SchoolService {
  constructor(@InjectModel(School.name) private schoolModel: Model<School>) {}

  create(createSchoolDto: CreateSchoolDto) {
    const createdSchool = new this.schoolModel(createSchoolDto);
    return createdSchool.save();
  }

  findAll() {
    return this.schoolModel.find().exec();
  }

  async findOne(id: number) {
    const school = await this.schoolModel.findById(id).exec();
    if (!school) {
      throw new NotFoundException(`School with ID ${id} not found`);
    }
    return school;
  }
  async update(id: string, updateSchoolDto: UpdateSchoolDto) {
    const updatedSchool = await this.schoolModel
      .findByIdAndUpdate(id, updateSchoolDto, { new: true })
      .exec();
    if (!updatedSchool) {
      throw new NotFoundException(`School with ID ${id} not found`);
    }
    return updatedSchool;
  }

  async remove(id: string) {
    const deletedSchool = await this.schoolModel.findByIdAndDelete(id).exec();
    if (!deletedSchool) {
      throw new NotFoundException(`School with ID ${id} not found`);
    }
    return deletedSchool;
  }
}
