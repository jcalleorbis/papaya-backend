import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorBonusDto } from './dto/create-tutor_bonus.dto';
import { UpdateTutorBonusDto } from './dto/update-tutor_bonus.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TutorBonus } from './schemas/tutor_bonus_schema';
import { Model } from 'mongoose';

@Injectable()
export class TutorBonusService {
  constructor(
    @InjectModel(TutorBonus.name)
    private readonly TutorBonusModel: Model<TutorBonus>,
  ) {}

  async create(createTutorBonusDto: CreateTutorBonusDto): Promise<TutorBonus> {
    const createdCriteria = new this.TutorBonusModel(createTutorBonusDto);
    return createdCriteria.save();
  }

  async findAll(): Promise<TutorBonus[]> {
    return this.TutorBonusModel.find().exec();
  }

  async findOne(id: string): Promise<TutorBonus> {
    const criteria = await this.TutorBonusModel.findById(id).exec();
    if (!criteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return criteria;
  }

  async update(
    id: string,
    updateTutorBonusDto: UpdateTutorBonusDto,
  ): Promise<TutorBonus> {
    const updatedCriteria = await this.TutorBonusModel.findByIdAndUpdate(
      id,
      updateTutorBonusDto,
      { new: true },
    ).exec();
    if (!updatedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return updatedCriteria;
  }

  async remove(id: string): Promise<TutorBonus> {
    const deletedCriteria =
      await this.TutorBonusModel.findByIdAndDelete(id).exec();
    if (!deletedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return deletedCriteria;
  }
}
