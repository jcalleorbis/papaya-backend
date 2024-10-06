import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AccountContractService } from './account_contract.service';
import { CreateAccountContractDto } from './dto/create-account_contract.dto';
import { UpdateAccountContractDto } from './dto/update-account_contract.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Account Contract')
@ApiBearerAuth()
@Controller('account-contract')
export class AccountContractController {
  constructor(
    private readonly accountContractService: AccountContractService,
  ) {}

  @Post()
  create(@Body() createAccountContractDto: CreateAccountContractDto) {
    return this.accountContractService.create(createAccountContractDto);
  }

  @Get()
  findAll() {
    return this.accountContractService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountContractService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountContractDto: UpdateAccountContractDto,
  ) {
    return this.accountContractService.update(id, updateAccountContractDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountContractService.remove(id);
  }
}
