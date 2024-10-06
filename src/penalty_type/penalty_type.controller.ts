import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PenaltyTypeService } from './penalty_type.service';
import { CreatePenaltyTypeDto } from './dto/create-penalty_type.dto';
import { UpdatePenaltyTypeDto } from './dto/update-penalty_type.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Penalty Type')
@ApiBearerAuth()
@Controller('penalty-type')
export class PenaltyTypeController {
  constructor(private readonly penaltyTypeService: PenaltyTypeService) {}

  @Post()
  create(@Body() createPenaltyTypeDto: CreatePenaltyTypeDto) {
    return this.penaltyTypeService.create(createPenaltyTypeDto);
  }

  @Get()
  findAll() {
    return this.penaltyTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penaltyTypeService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePenaltyTypeDto: UpdatePenaltyTypeDto,
  ) {
    return this.penaltyTypeService.update(id, updatePenaltyTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.penaltyTypeService.remove(id);
  }
}
