import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TutorBonusService } from './tutor_bonus.service';
import { CreateTutorBonusDto } from './dto/create-tutor_bonus.dto';
import { UpdateTutorBonusDto } from './dto/update-tutor_bonus.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tutor Bonus')
@ApiBearerAuth()
@Controller('tutor-bonus')
export class TutorBonusController {
  constructor(private readonly tutorBonusService: TutorBonusService) {}

  @Post()
  create(@Body() createTutorBonusDto: CreateTutorBonusDto) {
    return this.tutorBonusService.create(createTutorBonusDto);
  }

  @Get()
  findAll() {
    return this.tutorBonusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorBonusService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorBonusDto: UpdateTutorBonusDto,
  ) {
    return this.tutorBonusService.update(id, updateTutorBonusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorBonusService.remove(id);
  }
}
