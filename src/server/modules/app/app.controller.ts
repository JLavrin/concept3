import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/server/modules/app/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloMessage(): string {
    return this.appService.getHelloMessage();
  }
}
