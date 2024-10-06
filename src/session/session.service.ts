import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from 'inspector/promises';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session.name) private sessionModel: Model<Session>,
  ) {}

  create(createSessionDto: CreateSessionDto) {
    const createdSession = new this.sessionModel(createSessionDto);
    return createdSession.save();
  }

  findAll() {
    return this.sessionModel.find().exec();
  }

  async findOne(id: string) {
    const session = await this.sessionModel.findById(id).exec();
    if (!session) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }
    return session;
  }

  async update(id: string, updateSessionDto: UpdateSessionDto) {
    const updatedSession = await this.sessionModel
      .findByIdAndUpdate(id, updateSessionDto, { new: true })
      .exec();
    if (!updatedSession) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }
    return updatedSession;
  }

  async remove(id: string) {
    const deletedSession = await this.sessionModel.findByIdAndDelete(id).exec();
    if (!deletedSession) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }
    return deletedSession;
  }
}
