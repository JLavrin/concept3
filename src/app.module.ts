import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PositionModule } from 'src/modules/position/position.module'

@Module({
  imports: [PositionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
