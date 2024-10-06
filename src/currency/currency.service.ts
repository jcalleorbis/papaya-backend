import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Currency } from './schemas/currency.schema';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectModel(Currency.name) private readonly CurrencyModel: Model<Currency>,
  ) {}

  async create(createCurrencyDto: CreateCurrencyDto): Promise<Currency> {
    const createdCriteria = new this.CurrencyModel(createCurrencyDto);
    return createdCriteria.save();
  }

  async findAll(): Promise<Currency[]> {
    return this.CurrencyModel.find().exec();
  }

  async findOne(id: string): Promise<Currency> {
    const criteria = await this.CurrencyModel.findById(id).exec();
    if (!criteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return criteria;
  }

  async update(
    id: string,
    updateCurrencyDto: UpdateCurrencyDto,
  ): Promise<Currency> {
    const updatedCriteria = await this.CurrencyModel.findByIdAndUpdate(
      id,
      updateCurrencyDto,
      { new: true },
    ).exec();
    if (!updatedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return updatedCriteria;
  }

  async remove(id: string): Promise<Currency> {
    const deletedCriteria =
      await this.CurrencyModel.findByIdAndDelete(id).exec();
    if (!deletedCriteria) {
      throw new NotFoundException(`Criteria with ID ${id} not found`);
    }
    return deletedCriteria;
  }
}
