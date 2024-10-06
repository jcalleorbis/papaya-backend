import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './schemas/notification.shema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class notificationService {
  constructor(
    @InjectModel(Notification.name)
    private notificationModel: Model<Notification>,
  ) {}
  create(CreateNotificationDto: CreateNotificationDto) {
    const createnotification = new this.notificationModel(
      CreateNotificationDto,
    );
    return createnotification.save();
  }

  findAll() {
    return this.notificationModel.find().exec();
  }

  async findOne(id: string) {
    const notification = await this.notificationModel.findById(id).exec();
    if (!notification) {
      throw new NotFoundException(`notification with ID ${id} not found`);
    }
    return notification;
  }

  async update(id: string, updatenotificationDto: UpdateNotificationDto) {
    const updatednotification = await this.notificationModel
      .findByIdAndUpdate(id, updatenotificationDto, { new: true })
      .exec();
    if (!updatednotification) {
      throw new NotFoundException(`notification with ID ${id} not found`);
    }
    return updatednotification;
  }

  async remove(id: string) {
    const deletednotification = await this.notificationModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletednotification) {
      throw new NotFoundException(`notification with ID ${id} not found`);
    }
    return deletednotification;
  }
}
