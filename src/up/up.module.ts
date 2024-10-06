import { Module } from '@nestjs/common';
import { UpController } from './up.controller';

@Module({
  controllers: [UpController],
  providers: [],
})
export class UpModule {}
