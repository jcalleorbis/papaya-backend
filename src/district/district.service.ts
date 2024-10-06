import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { InjectModel } from '@nestjs/mongoose';
import { District } from './entities/district.entity';
import { Model } from 'mongoose';

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District.name) private districtModel: Model<District>,
  ) {}

  create(createDistrictDto: CreateDistrictDto) {
    const createdDistrict = new this.districtModel(createDistrictDto);
    return createdDistrict.save();
  }

  findAll() {
    return this.districtModel.find().exec();
  }

  async findOne(id: number) {
    const district = await this.districtModel.findById(id).exec();
    if (!district) {
      throw new NotFoundException(`District with ID ${id} not found`);
    }
    return district;
  }

  async update(id: string, updateDistrictDto: UpdateDistrictDto) {
    const updatedDistrict = await this.districtModel
      .findByIdAndUpdate(id, updateDistrictDto, { new: true })
      .exec();
    if (!updatedDistrict) {
      throw new NotFoundException(`District with ID ${id} not found`);
    }
    return updatedDistrict;
  }

  async remove(id: string) {
    const deletedDistrict = await this.districtModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedDistrict) {
      throw new NotFoundException(`District with ID ${id} not found`);
    }
    return deletedDistrict;
  }
}
