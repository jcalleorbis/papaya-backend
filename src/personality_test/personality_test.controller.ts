import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PersonalityTestService } from './personality_test.service';
import { CreatePersonalityTestDto } from './dto/create-personality_test.dto';
import { UpdatePersonalityTestDto } from './dto/update-personality_test.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Personality Test')
@ApiBearerAuth()
@Controller('personality-test')
export class PersonalityTestController {
  constructor(
    private readonly personalityTestService: PersonalityTestService,
  ) {}

  @Post()
  create(@Body() createPersonalityTestDto: CreatePersonalityTestDto) {
    return this.personalityTestService.create(createPersonalityTestDto);
  }

  @Get()
  findAll() {
    return this.personalityTestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalityTestService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePersonalityTestDto: UpdatePersonalityTestDto,
  ) {
    return this.personalityTestService.update(id, updatePersonalityTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalityTestService.remove(id);
  }
}
