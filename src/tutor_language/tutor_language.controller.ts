import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TutorLanguageService } from './tutor_language.service';
import { CreateTutorLanguageDto } from './dto/create-tutor_language.dto';
import { UpdateTutorLanguageDto } from './dto/update-tutor_language.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tutor Language')
@Controller('tutor-language')
export class TutorLanguageController {
  constructor(private readonly tutorLenguageService: TutorLanguageService) {}

  @Post()
  create(@Body() createTutorLenguageDto: CreateTutorLanguageDto) {
    return this.tutorLenguageService.create(createTutorLenguageDto);
  }

  @Get()
  findAll() {
    return this.tutorLenguageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorLenguageService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorLenguageDto: UpdateTutorLanguageDto,
  ) {
    return this.tutorLenguageService.update(id, updateTutorLenguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorLenguageService.remove(id);
  }
}
