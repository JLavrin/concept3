import { Injectable } from '@nestjs/common';
import getPositionsQuery from 'src/server/requests/getPositionsQuery';
import { PositionRequestData } from 'src/server/types/requests';
import dayjs from 'src/server/helpers/dayjs';

@Injectable()
export class PositionService {
  async getPositions(): Promise<
    PositionRequestData & { secondsTillLastUpdate: number }
  > {
    const response = await getPositionsQuery();

    const lastUpdate = dayjs(response.lastUpdate);

    return {
      secondsTillLastUpdate: dayjs().diff(lastUpdate, 'seconds'),
      ...response,
    };
  }

  async getPositionsByRouteShortName(
    routeShortName: string,
  ): Promise<PositionRequestData & { secondsTillLastUpdate: number }> {
    const response = await this.getPositions();

    const lastUpdate = dayjs(response.lastUpdate);

    return {
      ...response,
      secondsTillLastUpdate: dayjs().diff(lastUpdate, 'seconds'),
      vehicles: response.vehicles.filter(
        (vehicle) => vehicle.routeShortName === routeShortName,
      ),
    };
  }
}
