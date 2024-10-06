import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AccountSchoolService } from './account_school.service';
import { CreateAccountSchoolDto } from './dto/create-account_school.dto';
import { UpdateAccountSchoolDto } from './dto/update-account_school.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Account School')
@ApiBearerAuth()
@Controller('account-school')
export class AccountSchoolController {
  constructor(private readonly accountSchoolService: AccountSchoolService) {}

  @Post()
  create(@Body() createAccountSchoolDto: CreateAccountSchoolDto) {
    return this.accountSchoolService.create(createAccountSchoolDto);
  }

  @Get()
  findAll() {
    return this.accountSchoolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountSchoolService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountSchoolDto: UpdateAccountSchoolDto,
  ) {
    return this.accountSchoolService.update(+id, updateAccountSchoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountSchoolService.remove(+id);
  }
}
