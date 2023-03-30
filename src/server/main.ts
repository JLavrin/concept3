import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from 'src/server/modules/app/app.module';
import * as dotenv from 'dotenv';
import * as express from 'express';
import { join } from 'path';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Bus api')
    .setDescription('Api for public transport in Gdańsk city')
    .setVersion('1.0')
    .addTag('bus')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.setGlobalPrefix('api');

  const isProduction = process.env.NODE_ENV === 'production';

  app.use(
    express.static(join(__dirname, '..', isProduction ? 'dist/public' : '')),
  );

  await app.listen(process.env.PORT || process.env.APP_PORT || 3000);
}
bootstrap();
