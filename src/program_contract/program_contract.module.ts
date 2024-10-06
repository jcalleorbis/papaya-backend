import { Module } from '@nestjs/common';
import { ProgramContractService } from './program_contract.service';
import { ProgramContractController } from './program_contract.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ProgramContract,
  ProgramContractSchema,
} from './schemas/program_contract.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProgramContract.name, schema: ProgramContractSchema },
    ]),
  ],
  controllers: [ProgramContractController],
  providers: [ProgramContractService],
})
export class ProgramContractModule {}
