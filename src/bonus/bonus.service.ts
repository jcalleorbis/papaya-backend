import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBonusDto } from './dto/create-bonus.dto';
import { UpdateBonusDto } from './dto/update-bonus.dto';
import { Bonus } from './schemas/bonus.schema';

@Injectable()
export class BonusService {
  constructor(
    @InjectModel(Bonus.name) private readonly bonusModel: Model<Bonus>,
  ) {}

  async create(createBonusDto: CreateBonusDto): Promise<Bonus> {
    const createdBonus = new this.bonusModel(createBonusDto);
    return createdBonus.save();
  }

  async findAll(): Promise<Bonus[]> {
    return this.bonusModel.find().exec();
  }

  async findOne(id: string): Promise<Bonus> {
    const bonus = await this.bonusModel.findById(id).exec();
    if (!bonus) {
      throw new NotFoundException(`Bonus with ID "${id}" not found`);
    }
    return bonus;
  }

  async update(id: string, updateBonusDto: UpdateBonusDto): Promise<Bonus> {
    const updatedBonus = await this.bonusModel
      .findByIdAndUpdate(id, updateBonusDto, { new: true })
      .exec();
    if (!updatedBonus) {
      throw new NotFoundException(`Bonus with ID "${id}" not found`);
    }
    return updatedBonus;
  }

  async remove(id: string): Promise<Bonus> {
    const deletedBonus = await this.bonusModel.findByIdAndDelete(id).exec();
    if (!deletedBonus) {
      throw new NotFoundException(`Bonus with ID "${id}" not found`);
    }
    return deletedBonus;
  }
}
