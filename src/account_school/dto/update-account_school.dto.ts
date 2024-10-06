import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountSchoolDto } from './create-account_school.dto';

export class UpdateAccountSchoolDto extends PartialType(
  CreateAccountSchoolDto,
) {}
