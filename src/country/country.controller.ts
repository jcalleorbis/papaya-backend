import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDTO } from './dto/country.dto';
import { UpdateCountryDTO } from './dto/country.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Country')
@ApiBearerAuth()
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  create(@Body() createContractDto: CreateCountryDTO) {
    return this.countryService.create(createContractDto);
  }

  @Get()
  findAll() {
    return this.countryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateContractDto: UpdateCountryDTO) {
    return this.countryService.update(id, updateContractDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryService.remove(id);
  }
}
