import { Module } from '@nestjs/common';
import { StandardService } from './standard.service';
import { StandardController } from './standard.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Standard, StandardSchema } from './schemas/standard.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Standard.name, schema: StandardSchema },
    ]),
  ],
  controllers: [StandardController],
  providers: [StandardService],
})
export class StandardModule {}
