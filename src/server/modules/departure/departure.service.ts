import { Injectable } from '@nestjs/common';
import getDeparturesQuery from 'src/server/requests/getDeparturesQuery';
import { DepartureRequestData } from 'src/server/types/requests';

@Injectable()
export class DepartureService {
  async getDepartures(stopId?: number): Promise<DepartureRequestData> {
    const response = await getDeparturesQuery(stopId);

    return response;
  }
}
