import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProgramContractService } from './program_contract.service';
import { CreateProgramContractDto } from './dto/create-program_contract.dto';
import { UpdateProgramContractDto } from './dto/update-program_contract.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Program Contract')
@ApiBearerAuth()
@Controller('program-contract')
export class ProgramContractController {
  constructor(
    private readonly programContractService: ProgramContractService,
  ) {}

  @Post()
  create(@Body() createProgramContractDto: CreateProgramContractDto) {
    return this.programContractService.create(createProgramContractDto);
  }

  @Get()
  findAll() {
    return this.programContractService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programContractService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProgramContractDto: UpdateProgramContractDto,
  ) {
    return this.programContractService.update(id, updateProgramContractDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programContractService.remove(id);
  }
}
