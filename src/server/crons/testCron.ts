import { Injectable, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import dayjs from 'src/server/helpers/dayjs';

@Injectable()
export class TestCron implements OnModuleInit {
  async onModuleInit() {
    await this.testCron();
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  async testCron() {
    console.log(`[${dayjs().format('HH:mm:ss')}] => TestCron executed`);
  }
}
