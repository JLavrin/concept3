import { Controller, Get, Post } from '@nestjs/common';
import { PositionService } from 'src/modules/position/position.service';
import { PositionRequestData } from 'src/types/requests';

@Controller('positions')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Get()
  async getPositions(): Promise<
    PositionRequestData & { secondsTillLastUpdate: number }
  > {
    return this.positionService.getPositions();
  }

  @Post()
  async createPosition() {
    return {
      test: [],
    };
  }
}
