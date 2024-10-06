import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BonusService } from './bonus.service';
import { CreateBonusDto } from './dto/create-bonus.dto';
import { UpdateBonusDto } from './dto/update-bonus.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Bonus')
@ApiBearerAuth()
@Controller('bonus')
export class BonusController {
  constructor(private readonly bonusService: BonusService) {}

  @Post()
  create(@Body() createBonusDto: CreateBonusDto) {
    return this.bonusService.create(createBonusDto);
  }

  @Get()
  findAll() {
    return this.bonusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bonusService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBonusDto: UpdateBonusDto) {
    return this.bonusService.update(id, updateBonusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bonusService.remove(id);
  }
}
