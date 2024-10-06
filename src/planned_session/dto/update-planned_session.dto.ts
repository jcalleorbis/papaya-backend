import { PartialType } from '@nestjs/mapped-types';
import { CreatePlannedSessionDto } from './create-planned_session.dto';

export class UpdatePlannedSessionDto extends PartialType(CreatePlannedSessionDto) {}
