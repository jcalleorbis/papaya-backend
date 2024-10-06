import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorGroupRelationDto } from './create-tutor_group_relation.dto';

export class UpdateTutorGroupRelationDto extends PartialType(CreateTutorGroupRelationDto) {}
