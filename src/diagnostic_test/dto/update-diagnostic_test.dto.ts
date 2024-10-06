import { PartialType } from '@nestjs/mapped-types';
import { CreateDiagnosticTestDto } from './create-diagnostic_test.dto';

export class UpdateDiagnosticTestDto extends PartialType(CreateDiagnosticTestDto) {}
