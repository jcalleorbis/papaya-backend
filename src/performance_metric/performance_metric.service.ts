import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePerformanceMetricDto } from './dto/create-performance_metric.dto';
import { UpdatePerformanceMetricDto } from './dto/update-performance_metric.dto';
import { PerformanceMetric } from './schemas/performance_metric.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PerformanceMetricService {
  constructor(
    @InjectModel(PerformanceMetric.name)
    private readonly PerformanceMetricModel: Model<PerformanceMetric>,
  ) {}

  async create(
    createPerformanceMetricDto: CreatePerformanceMetricDto,
  ): Promise<PerformanceMetric> {
    const createdCriteria = new this.PerformanceMetricModel(
      createPerformanceMetricDto,
    );
    return createdCriteria.save();
  }

  async findAll(): Promise<PerformanceMetric[]> {
    return this.PerformanceMetricModel.find().exec();
  }

  async findOne(id: string): Promise<PerformanceMetric> {
    const criteria = await this.PerformanceMetricModel.findById(id).exec();
    if (!criteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return criteria;
  }

  async update(
    id: string,
    updatePerformanceMetricDto: UpdatePerformanceMetricDto,
  ): Promise<PerformanceMetric> {
    const updatedCriteria = await this.PerformanceMetricModel.findByIdAndUpdate(
      id,
      updatePerformanceMetricDto,
      { new: true },
    ).exec();
    if (!updatedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return updatedCriteria;
  }

  async remove(id: string): Promise<PerformanceMetric> {
    const deletedCriteria =
      await this.PerformanceMetricModel.findByIdAndDelete(id).exec();
    if (!deletedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return deletedCriteria;
  }
}
