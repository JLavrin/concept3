import { Departure } from 'src/server/types/Departure';
import { Position } from 'src/server/types/Position';

type PositionRequestData = {
  lastUpdate: string;
  vehicles: Position[];
};

type DepartureRequestData = {
  lastUpdate: string;
  departures: Departure[];
};

export type { PositionRequestData, DepartureRequestData };
