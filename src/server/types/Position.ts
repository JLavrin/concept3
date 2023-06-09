type Position = {
  generated: string;
  routeShortName: string;
  tripId: number;
  headsign: string;
  vehicleCode: string;
  vehicleService: string;
  vehicleId: number;
  speed: number;
  direction: number;
  delay: number;
  scheduledTripStartTime: string;
  lat: number;
  lon: number;
  gpsQuality: number;
};

export type { Position };
