import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorAvailabilityDto } from './dto/create-tutor_availability.dto';
import { UpdateTutorAvailabilityDto } from './dto/update-tutor_availability.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TutorAvailability } from './schemas/tutor_availability.schema';
import { Model } from 'mongoose';

@Injectable()
export class TutorAvailabilityService {
  constructor(
    @InjectModel(TutorAvailability.name)
    private readonly TutorAvailabilityModel: Model<TutorAvailability>,
  ) {}

  async create(
    createTutorAvailabilityDto: CreateTutorAvailabilityDto,
  ): Promise<TutorAvailability> {
    const createdCriteria = new this.TutorAvailabilityModel(
      createTutorAvailabilityDto,
    );
    return createdCriteria.save();
  }

  async findAll(): Promise<TutorAvailability[]> {
    return this.TutorAvailabilityModel.find().exec();
  }

  async findOne(id: string): Promise<TutorAvailability> {
    const criteria = await this.TutorAvailabilityModel.findById(id).exec();
    if (!criteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return criteria;
  }

  async update(
    id: string,
    updateTutorAvailabilityDto: UpdateTutorAvailabilityDto,
  ): Promise<TutorAvailability> {
    const updatedCriteria = await this.TutorAvailabilityModel.findByIdAndUpdate(
      id,
      updateTutorAvailabilityDto,
      { new: true },
    ).exec();
    if (!updatedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return updatedCriteria;
  }

  async remove(id: string): Promise<TutorAvailability> {
    const deletedCriteria =
      await this.TutorAvailabilityModel.findByIdAndDelete(id).exec();
    if (!deletedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return deletedCriteria;
  }
}
