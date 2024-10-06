import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Region } from './schemas/region.schema';
import { Model } from 'mongoose';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region.name) private regionModel: Model<Region>) {}

  create(createRegionDto: CreateRegionDto) {
    const createdRegion = new this.regionModel(createRegionDto);
    return createdRegion.save();
  }

  findAll() {
    return this.regionModel.find().exec();
  }

  async findOne(id: number) {
    const region = await this.regionModel.findById(id).exec();
    if (!region) {
      throw new NotFoundException(`Region with ID ${id} not found`);
    }
    return region;
  }

  async update(id: string, updateRegionDto: UpdateRegionDto) {
    const updatedRegion = await this.regionModel
      .findByIdAndUpdate(id, updateRegionDto, { new: true })
      .exec();
    if (!updatedRegion) {
      throw new NotFoundException(`Region with ID ${id} not found`);
    }
    return updatedRegion;
  }

  async remove(id: string) {
    const deletedRegion = await this.regionModel.findByIdAndDelete(id).exec();
    if (!deletedRegion) {
      throw new NotFoundException(`Region with ID ${id} not found`);
    }
    return deletedRegion;
  }
}
