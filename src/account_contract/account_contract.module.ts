import { Module } from '@nestjs/common';
import { AccountContractService } from './account_contract.service';
import { AccountContractController } from './account_contract.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AccountContract,
  AccountContractSchema,
} from './schemas/account_contract.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AccountContract.name, schema: AccountContractSchema },
    ]),
  ],
  controllers: [AccountContractController],
  providers: [AccountContractService],
})
export class AccountContractModule {}
