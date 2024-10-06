import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorGroupRelationDto } from './dto/create-tutor_group_relation.dto';
import { UpdateTutorGroupRelationDto } from './dto/update-tutor_group_relation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TutorGroupRelation } from './schema/tutor_group_relation.schema';
import { Model } from 'mongoose';

@Injectable()
export class TutorGroupRelationService {
  constructor(
    @InjectModel(TutorGroupRelation.name)
    private tutor_group_relationModel: Model<TutorGroupRelation>,
  ) {}

  create(createTutorGroupRelationDto: CreateTutorGroupRelationDto) {
    const createdTutor_group_relation = new this.tutor_group_relationModel(
      createTutorGroupRelationDto,
    );
    return createdTutor_group_relation.save();
  }

  findAll() {
    return this.tutor_group_relationModel.find().exec();
  }

  async findOne(id: number) {
    const tutor_group_relation = await this.tutor_group_relationModel
      .findById(id)
      .exec();
    if (!tutor_group_relation) {
      throw new NotFoundException(
        `Tutor_group_relation with ID ${id} not found`,
      );
    }
    return tutor_group_relation;
  }

  async update(
    id: string,
    updateTutorGroupRelationDto: UpdateTutorGroupRelationDto,
  ) {
    const updatedTutor_group_relation = await this.tutor_group_relationModel
      .findByIdAndUpdate(id, updateTutorGroupRelationDto, { new: true })
      .exec();
    if (!updatedTutor_group_relation) {
      throw new NotFoundException(
        `Tutor_group_relation with ID ${id} not found`,
      );
    }
    return updatedTutor_group_relation;
  }

  async remove(id: string) {
    const deletedTutor_group_relation = await this.tutor_group_relationModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedTutor_group_relation) {
      throw new NotFoundException(
        `Tutor_group_relation with ID ${id} not found`,
      );
    }
    return deletedTutor_group_relation;
  }
}
