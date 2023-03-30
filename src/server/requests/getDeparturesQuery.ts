import gdanskClient from 'src/server/providers/clients/gdanskClient';
import ProviderException from 'src/server/exceptions/ProviderException';
import { DepartureRequestData } from 'src/server/types/requests';

const getPositionsQuery = async (
  stopId?: number,
): Promise<DepartureRequestData> => {
  try {
    const response = await gdanskClient.get('/departures', {
      params: {
        stopId,
      },
    });

    return response.data;
  } catch (error) {
    throw new ProviderException(error);
  }
};

export default getPositionsQuery;
