import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCountryDTO, UpdateCountryDTO } from './dto/country.dto';
import { Country } from './schemas/country.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name) private countryModel: Model<Country>,
  ) {}

  async findAll(): Promise<Country[]> {
    return this.countryModel.find().exec();
  }

  async create(createCountryDto: CreateCountryDTO): Promise<Country> {
    const createdCountry = new this.countryModel(createCountryDto);
    return createdCountry.save();
  }

  async findOne(id: string): Promise<Country> {
    const country = await this.countryModel.findById(id).exec();
    if (!country) {
      throw new NotFoundException(`Country with ID ${id} not found`);
    }
    return country;
  }

  async update(
    id: string,
    updateCountryDto: UpdateCountryDTO,
  ): Promise<Country> {
    const updatedCountry = await this.countryModel
      .findByIdAndUpdate(id, updateCountryDto, { new: true })
      .exec();
    if (!updatedCountry) {
      throw new NotFoundException(`Country with ID ${id} not found`);
    }
    return updatedCountry;
  }

  async remove(id: string): Promise<Country> {
    const deletedCountry = await this.countryModel.findByIdAndDelete(id).exec();
    if (!deletedCountry) {
      throw new NotFoundException(`Country with ID ${id} not found`);
    }
    return deletedCountry;
  }
}
