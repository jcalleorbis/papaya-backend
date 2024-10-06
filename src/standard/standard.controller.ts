import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { StandardService } from './standard.service';
import { CreateStandardDto } from './dto/create-standard.dto';
import { UpdateStandardDto } from './dto/update-standard.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Standard')
@ApiBearerAuth()
@Controller('standard')
export class StandardController {
  constructor(private readonly standardService: StandardService) {}

  @Post()
  create(@Body() createStandardDto: CreateStandardDto) {
    return this.standardService.create(createStandardDto);
  }

  @Get()
  findAll() {
    return this.standardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.standardService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateStandardDto: UpdateStandardDto,
  ) {
    return this.standardService.update(id, updateStandardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.standardService.remove(id);
  }
}
