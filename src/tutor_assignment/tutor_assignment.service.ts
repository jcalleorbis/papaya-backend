import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorAssignmentDto } from './dto/create-tutor_assignment.dto';
import { UpdateTutorAssignmentDto } from './dto/update-tutor_assignment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TutorAssignment } from './schemas/tutor_assignment.schema';

@Injectable()
export class TutorAssignmentService {
  constructor(
    @InjectModel(TutorAssignment.name)
    private tutor_assignmentModel: Model<TutorAssignment>,
  ) {}

  create(createTutorAssignmentDto: CreateTutorAssignmentDto) {
    const createdTutorAssignment = new this.tutor_assignmentModel(
      createTutorAssignmentDto,
    );
    return createdTutorAssignment.save();
  }

  findAll() {
    return this.tutor_assignmentModel.find().exec();
  }

  async findOne(id: number) {
    const TutorAssignment = await this.tutor_assignmentModel
      .findById(id)
      .exec();
    if (!TutorAssignment) {
      throw new NotFoundException(`TutorAssignment with ID ${id} not found`);
    }
    return TutorAssignment;
  }

  async update(id: number, updateTutorAssignmentDto: UpdateTutorAssignmentDto) {
    const updatedTutorAssignment = await this.tutor_assignmentModel
      .findByIdAndUpdate(id, updateTutorAssignmentDto, { new: true })
      .exec();
    if (!updatedTutorAssignment) {
      throw new NotFoundException(`TutorAssignment with ID ${id} not found`);
    }
    return updatedTutorAssignment;
  }

  async remove(id: number) {
    const deletedTutorAssignment = await this.tutor_assignmentModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedTutorAssignment) {
      throw new NotFoundException(`TutorAssignment with ID ${id} not found`);
    }
    return deletedTutorAssignment;
  }
}
