import gdanskClient from 'src/providers/clients/gdanskClient';
import ProviderException from 'src/exceptions/ProviderException';
import { DepartureRequestData } from 'src/types/requests';

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
