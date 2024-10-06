import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SessionTemplateService } from './session_template.service';
import { CreateSessionTemplateDto } from './dto/create-session_template.dto';
import { UpdateSessionTemplateDto } from './dto/update-session_template.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Session Template')
@ApiBearerAuth()
@Controller('session-template')
export class SessionTemplateController {
  constructor(
    private readonly sessionTemplateService: SessionTemplateService,
  ) {}

  @Post()
  create(@Body() createSessionTemplateDto: CreateSessionTemplateDto) {
    return this.sessionTemplateService.create(createSessionTemplateDto);
  }

  @Get()
  findAll() {
    return this.sessionTemplateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessionTemplateService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSessionTemplateDto: UpdateSessionTemplateDto,
  ) {
    return this.sessionTemplateService.update(id, updateSessionTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessionTemplateService.remove(id);
  }
}
