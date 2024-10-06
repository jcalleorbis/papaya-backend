import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Parent } from './schemas/parent.schema';

@Injectable()
export class ParentService {
  constructor(
    @InjectModel(Parent.name)
    private ParentModel: Model<Parent>,
  ) {}

  create(createparentDto: CreateParentDto) {
    const createdParent = new this.ParentModel(createparentDto);
    return createdParent.save();
  }

  findAll() {
    return this.ParentModel.find().exec();
  }

  async findOne(id: string) {
    const Parent = await this.ParentModel.findById(id).exec();
    if (!Parent) {
      throw new NotFoundException(`Parent with ID ${id} not found`);
    }
    return parent;
  }

  async update(id: string, updateParentDto: UpdateParentDto) {
    const updatedParent = await this.ParentModel.findByIdAndUpdate(
      id,
      updateParentDto,
      { new: true },
    ).exec();

    if (!updatedParent) {
      throw new NotFoundException(`Parent with ID ${id} not found`);
    }
    return updatedParent;
  }

  async remove(id: string) {
    const deletedParent = await this.ParentModel.findByIdAndDelete(id).exec();
    if (!deletedParent) {
      throw new NotFoundException(`Parent with ID ${id} not found`);
    }
    return deletedParent;
  }
}
