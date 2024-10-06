import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBuyerReportTypeDto } from './dto/create-buyer_report_type.dto';
import { UpdateBuyerReportTypeDto } from './dto/update-buyer_report_type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BuyerReportType } from './schemas/buyer_report_type.schemas';
import { Model } from 'mongoose';

@Injectable()
export class BuyerReportTypeService {
  constructor(
    @InjectModel(BuyerReportType.name)
    private BuyerReportTypeModel: Model<BuyerReportType>,
  ) {}

  create(createBuyerReportTypeDto: CreateBuyerReportTypeDto) {
    const createdBuyerReportType = new this.BuyerReportTypeModel(
      createBuyerReportTypeDto,
    );
    return createdBuyerReportType.save();
  }

  findAll() {
    return this.BuyerReportTypeModel.find().exec();
  }

  async findOne(id: string) {
    const BuyerReportType = await this.BuyerReportTypeModel.findById(id).exec();
    if (!BuyerReportType) {
      throw new NotFoundException(`BuyerReportType with ID ${id} not found`);
    }
    return BuyerReportType;
  }

  async update(id: string, updateBuyerReportTypeDto: UpdateBuyerReportTypeDto) {
    const updateBuyerReportType =
      await this.BuyerReportTypeModel.findByIdAndUpdate(
        id,
        updateBuyerReportTypeDto,
        { new: true },
      ).exec();
    if (!updateBuyerReportType) {
      throw new NotFoundException(`BuyerReportType with ID ${id} not found`);
    }
    return updateBuyerReportType;
  }

  async remove(id: string) {
    const deletedBuyerReportType =
      await this.BuyerReportTypeModel.findByIdAndDelete(id).exec();
    if (!deletedBuyerReportType) {
      throw new NotFoundException(`BuyerReportType with ID ${id} not found`);
    }
    return deletedBuyerReportType;
  }
}
