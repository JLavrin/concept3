import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { DepartureService } from 'src/server/modules/departure/departure.service';
import { DepartureRequestData } from 'src/server/types/requests';

@ApiTags('departure')
@Controller('departure')
export class DepartureController {
  constructor(private readonly departureService: DepartureService) {}

  @ApiQuery({
    name: 'stopId',
    description: 'Stop id i.e. "8227" or "8230"',
    required: false,
  })
  @Get()
  async getDepartures(
    @Query('stopId') stopId?: number,
  ): Promise<DepartureRequestData> {
    return await this.departureService.getDepartures(stopId);
  }
}
