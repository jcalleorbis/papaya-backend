import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DiagnosticTestService } from './diagnostic_test.service';
import { CreateDiagnosticTestDto } from './dto/create-diagnostic_test.dto';
import { UpdateDiagnosticTestDto } from './dto/update-diagnostic_test.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Diagnostic Test')
@ApiBearerAuth()
@Controller('diagnostic-test')
export class DiagnosticTestController {
  constructor(private readonly diagnosticTestService: DiagnosticTestService) {}

  @Post()
  create(@Body() createDiagnosticTestDto: CreateDiagnosticTestDto) {
    return this.diagnosticTestService.create(createDiagnosticTestDto);
  }

  @Get()
  findAll() {
    return this.diagnosticTestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diagnosticTestService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiagnosticTestDto: UpdateDiagnosticTestDto,
  ) {
    return this.diagnosticTestService.update(+id, updateDiagnosticTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diagnosticTestService.remove(+id);
  }
}
