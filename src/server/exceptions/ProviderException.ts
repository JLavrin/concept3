import { HttpException } from '@nestjs/common';
import ExceptionMessage from 'src/server/exceptions/enums/ExceptionMessage';
import { AxiosError } from 'axios';

class ProviderException extends HttpException {
  constructor(error: AxiosError) {
    console.log(error);
    super(ExceptionMessage.providerError, 500);
  }
}

export default ProviderException;
