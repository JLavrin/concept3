import gdanskClient from 'src/providers/clients/gdanskClient';
import ProviderException from 'src/exceptions/ProviderException';
import { PositionRequestData } from 'src/types/requests';

const getPositionsQuery = async (): Promise<PositionRequestData> => {
  try {
    const response = await gdanskClient.get('/gpsPositions', {
      params: {
        v: 2,
      },
    });

    return response.data;
  } catch (error) {
    throw new ProviderException(error);
  }
};

export default getPositionsQuery;
