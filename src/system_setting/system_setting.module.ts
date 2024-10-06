import { Module } from '@nestjs/common';
import { SystemSettingService } from './system_setting.service';
import { SystemSettingController } from './system_setting.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SystemSetting,
  SystemSettingSchema,
} from './schemas/system_setting.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SystemSetting.name, schema: SystemSettingSchema },
    ]),
  ],
  controllers: [SystemSettingController],
  providers: [SystemSettingService],
})
export class SystemSettingModule {}
