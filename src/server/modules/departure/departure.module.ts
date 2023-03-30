import { Module } from '@nestjs/common';
import { DepartureController } from 'src/server/modules/departure/departure.controller';
import { DepartureService } from 'src/server/modules/departure/departure.service';

@Module({
  imports: [],
  controllers: [DepartureController],
  providers: [DepartureService],
})
export class DepartureModule {}
