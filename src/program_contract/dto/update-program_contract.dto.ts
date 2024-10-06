import { PartialType } from '@nestjs/mapped-types';
import { CreateProgramContractDto } from './create-program_contract.dto';

export class UpdateProgramContractDto extends PartialType(CreateProgramContractDto) {}
