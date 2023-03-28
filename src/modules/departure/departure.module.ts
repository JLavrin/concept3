import { Module } from '@nestjs/common';
import { DepartureController } from 'src/modules/departure/departure.controller';
import { DepartureService } from 'src/modules/departure/departure.service';

@Module({
  imports: [],
  controllers: [DepartureController],
  providers: [DepartureService],
})
export class DepartureModule {}
