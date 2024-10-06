import { PartialType } from '@nestjs/mapped-types';
import { CreateClassQualityDto } from './create-class_quality.dto';

export class UpdateClassQualityDto extends PartialType(CreateClassQualityDto) {}
