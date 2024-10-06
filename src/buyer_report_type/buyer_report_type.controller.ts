import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BuyerReportTypeService } from './buyer_report_type.service';
import { CreateBuyerReportTypeDto } from './dto/create-buyer_report_type.dto';
import { UpdateBuyerReportTypeDto } from './dto/update-buyer_report_type.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Buyer Report Type')
@ApiBearerAuth()
@Controller('buyer-report-type')
export class BuyerReportTypeController {
  constructor(
    private readonly buyerReportTypeService: BuyerReportTypeService,
  ) {}

  @Post()
  create(@Body() createBuyerReportTypeDto: CreateBuyerReportTypeDto) {
    return this.buyerReportTypeService.create(createBuyerReportTypeDto);
  }

  @Get()
  findAll() {
    return this.buyerReportTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buyerReportTypeService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateBuyerReportTypeDto: UpdateBuyerReportTypeDto,
  ) {
    return this.buyerReportTypeService.update(id, updateBuyerReportTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buyerReportTypeService.remove(id);
  }
}
