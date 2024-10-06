import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DiagnosticTestExerciseService } from './diagnostic_test_exercise.service';
import { CreateDiagnosticTestExerciseDto } from './dto/create-diagnostic_test_exercise.dto';
import { UpdateDiagnosticTestExerciseDto } from './dto/update-diagnostic_test_exercise.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Diagnostic Test Exercise')
@ApiBearerAuth()
@Controller('diagnostic-test-exercise')
export class DiagnosticTestExerciseController {
  constructor(
    private readonly diagnosticTestExerciseService: DiagnosticTestExerciseService,
  ) {}

  @Post()
  create(
    @Body() createDiagnosticTestExerciseDto: CreateDiagnosticTestExerciseDto,
  ) {
    return this.diagnosticTestExerciseService.create(
      createDiagnosticTestExerciseDto,
    );
  }

  @Get()
  findAll() {
    return this.diagnosticTestExerciseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diagnosticTestExerciseService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiagnosticTestExerciseDto: UpdateDiagnosticTestExerciseDto,
  ) {
    return this.diagnosticTestExerciseService.update(
      id,
      updateDiagnosticTestExerciseDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diagnosticTestExerciseService.remove(id);
  }
}
