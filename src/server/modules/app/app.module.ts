import { Module } from '@nestjs/common';

import { AppController } from 'src/server/modules/app/app.controller';
import { AppService } from 'src/server/modules/app/app.service';
import { PositionModule } from 'src/server/modules/position/position.module';
import { DepartureModule } from 'src/server/modules/departure/departure.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TestCron } from 'src/server/crons/testCron';

@Module({
  imports: [PositionModule, DepartureModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, TestCron],
})
export class AppModule {}
