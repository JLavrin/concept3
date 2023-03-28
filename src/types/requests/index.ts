import { Departure } from 'src/types/Departure';
import { Position } from 'src/types/Position';

type PositionRequestData = {
  lastUpdate: string;
  vehicles: Position[];
};

type DepartureRequestData = {
  lastUpdate: string;
  departures: Departure[];
};

export type { PositionRequestData, DepartureRequestData };
