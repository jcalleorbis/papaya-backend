import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonalityTestDto } from './create-personality_test.dto';

export class UpdatePersonalityTestDto extends PartialType(CreatePersonalityTestDto) {}
