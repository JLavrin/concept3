import { DocumentBuilder } from '@nestjs/swagger'

const config = new DocumentBuilder()
  .setTitle('Bus api')
  .setDescription('Api for public transport in Gdańsk city')
  .setVersion('1.0')
  .addTag('bus')
  .build()

export default config


