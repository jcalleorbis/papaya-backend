import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SystemSettingService } from './system_setting.service';
import { CreateSystemSettingDto } from './dto/create-system_setting.dto';
import { UpdateSystemSettingDto } from './dto/update-system_setting.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('System Setting')
@ApiBearerAuth()
@Controller('system-setting')
export class SystemSettingController {
  constructor(private readonly systemSettingService: SystemSettingService) {}

  @Post()
  create(@Body() createSystemSettingDto: CreateSystemSettingDto) {
    return this.systemSettingService.create(createSystemSettingDto);
  }

  @Get()
  findAll() {
    return this.systemSettingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.systemSettingService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSystemSettingDto: UpdateSystemSettingDto,
  ) {
    return this.systemSettingService.update(id, updateSystemSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.systemSettingService.remove(id);
  }
}
