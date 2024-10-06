import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/decorators/public.decorator';

@ApiTags('Health Check')
@Controller('up')
export class UpController {
  constructor() {}

  @Public()
  @Get()
  findAll() {
    return {
      status: 'ok',
    };
  }
}
