import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassQualityDto } from './dto/create-class_quality.dto';
import { UpdateClassQualityDto } from './dto/update-class_quality.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ClassQuality } from './schemas/class_quality.schemas';
import { Model } from 'mongoose';

@Injectable()
export class ClassQualityService {
  constructor(
    @InjectModel(ClassQuality.name)
    private classQualityModel: Model<ClassQuality>,
  ) {}

  create(createClassQualityDto: CreateClassQualityDto) {
    const createdClassQuality = new this.classQualityModel(
      createClassQualityDto,
    );
    return createdClassQuality.save();
  }

  findAll() {
    return this.classQualityModel.find().exec();
  }

  async findOne(id: string) {
    const classQuality = await this.classQualityModel.findById(id).exec();
    if (!classQuality) {
      throw new NotFoundException(`ClassQuality with ID ${id} not found`);
    }
    return classQuality;
  }

  async update(id: string, updateClassQualityDto: UpdateClassQualityDto) {
    const updatedClassQuality = await this.classQualityModel
      .findByIdAndUpdate(id, updateClassQualityDto, { new: true })
      .exec();
    if (!updatedClassQuality) {
      throw new NotFoundException(`ClassQuality with ID ${id} not found`);
    }
    return updatedClassQuality;
  }

  async remove(id: string) {
    const deletedClassQuality = await this.classQualityModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedClassQuality) {
      throw new NotFoundException(`ClassQuality with ID ${id} not found`);
    }
    return deletedClassQuality;
  }
}
