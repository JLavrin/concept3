import { Controller, Get, Query } from '@nestjs/common';
import { PositionService } from 'src/modules/position/position.service';
import { PositionRequestData } from 'src/types/requests';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('position')
@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @ApiResponse({
    status: 200,
    description: 'Gps postions by route short name',
  })
  @ApiQuery({
    name: 'routeShortName',
    description: 'Route short name i.e. "155" or "N4"',
    required: false,
  })
  @Get()
  async getPositions(
    @Query('routeShortName') routeShortName?: string,
  ): Promise<PositionRequestData & { secondsTillLastUpdate: number }> {
    if (routeShortName) {
      return await this.positionService.getPositionsByRouteShortName(
        routeShortName,
      );
    }
    return await this.positionService.getPositions();
  }
}
