import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { Topic } from './schemas/topic.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TopicService {
  constructor(
    @InjectModel(Topic.name) private readonly TopicModel: Model<Topic>,
  ) {}

  async create(createTopicDto: CreateTopicDto): Promise<Topic> {
    const createdCriteria = new this.TopicModel(createTopicDto);
    return createdCriteria.save();
  }

  async findAll(): Promise<Topic[]> {
    return this.TopicModel.find().exec();
  }

  async findOne(id: string): Promise<Topic> {
    const criteria = await this.TopicModel.findById(id).exec();
    if (!criteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return criteria;
  }

  async update(id: string, updateTopicDto: UpdateTopicDto): Promise<Topic> {
    const updatedCriteria = await this.TopicModel.findByIdAndUpdate(
      id,
      updateTopicDto,
      { new: true },
    ).exec();
    if (!updatedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return updatedCriteria;
  }

  async remove(id: string): Promise<Topic> {
    const deletedCriteria = await this.TopicModel.findByIdAndDelete(id).exec();
    if (!deletedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return deletedCriteria;
  }
}
