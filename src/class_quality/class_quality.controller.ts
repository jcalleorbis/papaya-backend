import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ClassQualityService } from './class_quality.service';
import { CreateClassQualityDto } from './dto/create-class_quality.dto';
import { UpdateClassQualityDto } from './dto/update-class_quality.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@ApiTags('Class Quality')
@ApiBearerAuth()
@Controller('class-quality')
export class ClassQualityController {
  constructor(private readonly classQualityService: ClassQualityService) {}

  @Post()
  create(@Body() createClassQualityDto: CreateClassQualityDto) {
    return this.classQualityService.create(createClassQualityDto);
  }

  @Get()
  findAll() {
    return this.classQualityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classQualityService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateClassQualityDto: UpdateClassQualityDto,
  ) {
    return this.classQualityService.update(id, updateClassQualityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classQualityService.remove(id);
  }
}
