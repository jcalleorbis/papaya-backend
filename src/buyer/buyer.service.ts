import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBuyerDto } from './dto/create-buyer.dto';
import { UpdateBuyerDto } from './dto/update-buyer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Buyer } from './schemas/buyer.schema';
import { Model } from 'mongoose';

@Injectable()
export class BuyerService {
  constructor(
    @InjectModel(Buyer.name)
    private buyerModel: Model<Buyer>,
  ) {}

  create(CreatebuyerDto: CreateBuyerDto) {
    const CreatedBuyer = new this.buyerModel(CreatebuyerDto);
    return CreatedBuyer.save();
  }

  findAll() {
    return this.buyerModel.find().exec();
  }

  async findOne(id: number) {
    const buyer = await this.buyerModel.findById(id).exec();
    if (!buyer) {
      throw new NotFoundException(`Buyer with ID ${id} not found`);
    }
    return buyer;
  }

  async update(id: number, UpdateBuyerDto: UpdateBuyerDto) {
    const updatedBuyer = await this.buyerModel
      .findByIdAndUpdate(id, UpdateBuyerDto, { new: true })
      .exec();
    if (!updatedBuyer) {
      throw new NotFoundException(`Buyer with ID ${id} not found`);
    }
    return UpdateBuyerDto;
  }

  async remove(id: number) {
    const deletedBuyer = await this.buyerModel.findByIdAndDelete(id).exec();
    if (!deletedBuyer) {
      throw new NotFoundException(`Buyer with ID ${id} not found`);
    }
    return deletedBuyer;
  }
}
