import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountContractDto } from './create-account_contract.dto';

export class UpdateAccountContractDto extends PartialType(
  CreateAccountContractDto,
) {}
