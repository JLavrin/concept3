import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloMessage(): string {
    return 'Concept 3 on the way! Working correctly as fuck!';
  }
}
