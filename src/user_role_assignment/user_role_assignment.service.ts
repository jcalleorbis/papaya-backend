import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserRoleAssignmentDto } from './dto/create-user_role_assignment.dto';
import { UpdateUserRoleAssignmentDto } from './dto/update-user_role_assignment.dto';
import { UserRoleAssignment } from './entities/user_role_assignment.entity';

@Injectable()
export class UserRoleAssignmentService {
  constructor(
    @InjectModel('UserRoleAssignment')
    private readonly userRoleAssignmentModel: Model<UserRoleAssignment>,
  ) {}

  async create(
    createUserRoleAssignmentDto: CreateUserRoleAssignmentDto,
  ): Promise<UserRoleAssignment> {
    const newAssignment = new this.userRoleAssignmentModel(
      createUserRoleAssignmentDto,
    );
    return newAssignment.save();
  }

  async findAll(): Promise<UserRoleAssignment[]> {
    return this.userRoleAssignmentModel
      .find()
      .populate('user')
      .populate('userrole')
      .exec();
  }

  async findOne(id: string): Promise<UserRoleAssignment> {
    const assignment = await this.userRoleAssignmentModel
      .findById(id)
      .populate('user')
      .populate('userrole')
      .exec();

    if (!assignment) {
      throw new NotFoundException(`Assignment with ID ${id} not found`);
    }
    return assignment;
  }

  async update(
    id: string,
    updateUserRoleAssignmentDto: UpdateUserRoleAssignmentDto,
  ): Promise<UserRoleAssignment> {
    const updatedAssignment = await this.userRoleAssignmentModel
      .findByIdAndUpdate(id, updateUserRoleAssignmentDto, { new: true })
      .exec();

    if (!updatedAssignment) {
      throw new NotFoundException(`Assignment with ID ${id} not found`);
    }
    return updatedAssignment;
  }

  async remove(id: string): Promise<UserRoleAssignment> {
    const deletedAssignment = await this.userRoleAssignmentModel
      .findByIdAndDelete(id)
      .exec();

    if (!deletedAssignment) {
      throw new NotFoundException(`Assignment with ID ${id} not found`);
    }
    return deletedAssignment;
  }
}
