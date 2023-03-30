import { Module } from '@nestjs/common';
import { PositionController } from 'src/server/modules/position/position.controller';
import { PositionService } from 'src/server/modules/position/position.service';

@Module({
  imports: [],
  controllers: [PositionController],
  providers: [PositionService],
})
export class PositionModule {}
