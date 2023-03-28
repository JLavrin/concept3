import { Injectable } from '@nestjs/common';
import getDeparturesQuery from 'src/requests/getDeparturesQuery';
import { DepartureRequestData } from 'src/types/requests';

@Injectable()
export class DepartureService {
  async getDepartures(stopId?: number): Promise<DepartureRequestData> {
    const response = await getDeparturesQuery(stopId);

    return response;
  }
}
