import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEntityPerformanceDto } from './dto/create-entity_performance.dto';
import { UpdateEntityPerformanceDto } from './dto/update-entity_performance.dto';
import { InjectModel } from '@nestjs/mongoose';
import { EntityPerformance } from './schemas/entity_performance.schema';
import { Model } from 'mongoose';

@Injectable()
export class EntityPerformanceService {
  constructor(
    @InjectModel(EntityPerformance.name)
    private EntityPerformanceModel: Model<EntityPerformance>,
  ) {}

  create(createEntityPerformanceDto: CreateEntityPerformanceDto) {
    const createEntityPerformance = new this.EntityPerformanceModel(
      createEntityPerformanceDto,
    );
    return createEntityPerformance.save();
  }

  findAll() {
    return this.EntityPerformanceModel.find().exec();
  }

  async findOne(id: string) {
    const entityPerformance =
      await this.EntityPerformanceModel.findById(id).exec();
    if (!entityPerformance) {
      throw new NotFoundException(`EntityPerformance with ID ${id} not found`);
    }
    return entityPerformance;
  }

  async update(
    id: string,
    updateEntityPerformanceDto: UpdateEntityPerformanceDto,
  ) {
    const updatedEntityPerformance =
      await this.EntityPerformanceModel.findByIdAndUpdate(
        id,
        updateEntityPerformanceDto,
        { new: true },
      ).exec();
    if (!updatedEntityPerformance) {
      throw new NotFoundException(`EntityPerformance with ID ${id} not found`);
    }
    return updatedEntityPerformance;
  }

  async remove(id: string) {
    const deletedEntityPerformance =
      await this.EntityPerformanceModel.findByIdAndDelete(id).exec();
    if (!deletedEntityPerformance) {
      throw new NotFoundException(`EntityPerformance with ID ${id} not found`);
    }
    return deletedEntityPerformance;
  }
}
