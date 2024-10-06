import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserRoleDto } from './dto/create-user_role.dto';
import { UpdateUserRoleDto } from './dto/update-user_role.dto';
import { UserRole, UserRoleDocument } from './schemas/user-role.schema';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectModel(UserRole.name) private userRoleModel: Model<UserRoleDocument>,
  ) {}

  async create(createUserRoleDto: CreateUserRoleDto): Promise<UserRole> {
    const createdUserRole = new this.userRoleModel(createUserRoleDto);
    return createdUserRole.save();
  }

  async findAll(): Promise<UserRole[]> {
    return this.userRoleModel.find().exec();
  }

  async findOne(id: string): Promise<UserRole> {
    return this.userRoleModel.findById(id).exec();
  }

  async update(
    id: string,
    updateUserRoleDto: UpdateUserRoleDto,
  ): Promise<UserRole> {
    return this.userRoleModel
      .findByIdAndUpdate(id, updateUserRoleDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<UserRole> {
    return this.userRoleModel.findByIdAndDelete(id).exec();
  }
}
