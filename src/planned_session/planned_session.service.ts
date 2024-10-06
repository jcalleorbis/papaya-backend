import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlannedSessionDto } from './dto/create-planned_session.dto';
import { UpdatePlannedSessionDto } from './dto/update-planned_session.dto';
import { InjectModel } from '@nestjs/mongoose';
import { PlannedSession } from './entities/planned_session.entity';
import { Model } from 'mongoose';

@Injectable()
export class PlannedSessionService {
  constructor(
    @InjectModel(PlannedSession.name)
    private planned_sessionModel: Model<PlannedSession>,
  ) {}

  create(createPlannedSessionDto: CreatePlannedSessionDto) {
    const createdPlannedSession = new this.planned_sessionModel(
      createPlannedSessionDto,
    );
    return createdPlannedSession.save();
  }

  findAll() {
    return this.planned_sessionModel.find().exec();
  }

  async findOne(id: string) {
    const planned_session = await this.planned_sessionModel.findById(id).exec();
    if (!planned_session) {
      throw new NotFoundException(`State with ID ${id} not found`);
    }
    return planned_session;
  }

  async update(id: string, updatePlannedSessionDto: UpdatePlannedSessionDto) {
    const updatedPlannedSession = await this.planned_sessionModel
      .findByIdAndUpdate(id, updatePlannedSessionDto, { new: true })
      .exec();
    if (!updatedPlannedSession) {
      throw new NotFoundException(`State with ID ${id} not found`);
    }
    return updatedPlannedSession;
  }

  async remove(id: string) {
    const deletedPlannedSession = await this.planned_sessionModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedPlannedSession) {
      throw new NotFoundException(`PlannedSession with ID ${id} not found`);
    }
    return deletedPlannedSession;
  }
}
