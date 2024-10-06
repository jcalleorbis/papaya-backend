import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Group } from './schemas/group.schema';

@Injectable()
export class GroupService {
  constructor(@InjectModel(Group.name) private groupModel: Model<Group>) {}

  create(createGroupDto: CreateGroupDto) {
    const createdGroup = new this.groupModel(createGroupDto);
    return createdGroup.save();
  }

  findAll() {
    return this.groupModel.find().exec();
  }

  async findOne(id: string) {
    const Group = await this.groupModel.findById(id).exec();
    if (!Group) {
      throw new NotFoundException(`Group with ID ${id} not found`);
    }
    return Group;
  }

  async update(id: string, updateGroupDto: UpdateGroupDto) {
    const updatedGroup = await this.groupModel
      .findByIdAndUpdate(id, updateGroupDto, { new: true })
      .exec();
    if (!updatedGroup) {
      throw new NotFoundException(`Group with ID ${id} not found`);
    }
    return updatedGroup;
  }

  async remove(id: string) {
    const deletedGroup = await this.groupModel.findByIdAndDelete(id).exec();
    if (!deletedGroup) {
      throw new NotFoundException(`Group with ID ${id} not found`);
    }
    return deletedGroup;
  }
}
