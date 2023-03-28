import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PositionModule } from 'src/modules/position/position.module';
import { DepartureModule } from './modules/departure/departure.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TestCron } from 'src/crons/testCron';

@Module({
  imports: [PositionModule, DepartureModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, TestCron],
})
export class AppModule {}
