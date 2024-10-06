import { Module } from '@nestjs/common';
import { notificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Notification, notificationSchema } from './schemas/notification.shema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Notification.name, schema: notificationSchema },
    ]),
  ],
  controllers: [NotificationController],
  providers: [notificationService],
})
export class NotificationModule {}
