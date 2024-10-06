import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSystemSettingDto } from './dto/create-system_setting.dto';
import { UpdateSystemSettingDto } from './dto/update-system_setting.dto';
import { SystemSetting } from './schemas/system_setting.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SystemSettingService {
  constructor(
    @InjectModel(SystemSetting.name)
    private readonly systemSettingModel: Model<SystemSetting>,
  ) {}
  async create(
    createSystemSettingDto: CreateSystemSettingDto,
  ): Promise<SystemSetting> {
    const newSetting = new this.systemSettingModel(createSystemSettingDto);
    return await newSetting.save();
  }
  async findAll(): Promise<SystemSetting[]> {
    return await this.systemSettingModel.find().exec();
  }
  async findOne(id: string): Promise<SystemSetting> {
    const setting = await this.systemSettingModel.findById(id).exec();
    if (!setting) {
      throw new NotFoundException(`SystemSetting with ID ${id} not found`);
    }
    return setting;
  }
  async update(
    id: string,
    updateSystemSettingDto: UpdateSystemSettingDto,
  ): Promise<SystemSetting> {
    const updatedSetting = await this.systemSettingModel
      .findByIdAndUpdate(id, updateSystemSettingDto, { new: true })
      .exec();
    if (!updatedSetting) {
      throw new NotFoundException(`SystemSetting with ID ${id} not found`);
    }
    return updatedSetting;
  }
  async remove(id: string): Promise<SystemSetting> {
    const deletedSetting = await this.systemSettingModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedSetting) {
      throw new NotFoundException(`SystemSetting with ID ${id} not found`);
    }
    return deletedSetting;
  }
}
