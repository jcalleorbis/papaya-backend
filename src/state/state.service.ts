import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { InjectModel } from '@nestjs/mongoose';
import { State } from './schemas/state.schema';
import { Model } from 'mongoose';

@Injectable()
export class StateService {
  constructor(@InjectModel(State.name) private stateModel: Model<State>) {}

  create(createStateDto: CreateStateDto) {
    const createdState = new this.stateModel(createStateDto);
    return createdState.save();
  }

  findAll() {
    return this.stateModel.find().exec();
  }

  async findOne(id: number) {
    const state = await this.stateModel.findById(id).exec();
    if (!state) {
      throw new NotFoundException(`State with ID ${id} not found`);
    }
    return state;
  }

  async update(id: number, updateStateDto: UpdateStateDto) {
    const updatedState = await this.stateModel
      .findByIdAndUpdate(id, updateStateDto, { new: true })
      .exec();
    if (!updatedState) {
      throw new NotFoundException(`State with ID ${id} not found`);
    }
    return updatedState;
  }

  async remove(id: number) {
    const deletedState = await this.stateModel.findByIdAndDelete(id).exec();
    if (!deletedState) {
      throw new NotFoundException(`State with ID ${id} not found`);
    }
    return deletedState;
  }
}
