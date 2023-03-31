import { NestFactory } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'

import { AppModule } from 'src/server/modules/app/app.module'
import * as dotenv from 'dotenv'
import { join } from 'path'
import config from 'src/server/config/swagger'

dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  app.setGlobalPrefix('api')

  const indexFilePath =
    process.env.NODE_ENV === 'production'
      ? 'dist/public/index.html'
      : 'index.html'

  app.use((req, res, next) => {
    const path = req.path
    if (path.startsWith('/api/')) {
      return next()
    } else {
      const filePath = join(__dirname, '..', indexFilePath)

      return res.setHeader('Page', req.url).sendFile(filePath)
    }
  })

  await app.listen(process.env.PORT || process.env.APP_PORT || 3000)
}

bootstrap()
