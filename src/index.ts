import 'tsconfig-paths/register'

import express from 'express'
import morgan from 'morgan'
import errorHandler from 'src/handlers/errorHandler'
import ApiV1 from 'src/modules/ApiV1'

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'http://localhost'

const server = async () => {
  const app = express()

  // middlewares
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(morgan('dev'))

  app.get('/', (req, res) => {
    res
      .status(200)
      .send('Server running properly')
  })

  app.use('/api/v1', ApiV1)

  app.use(errorHandler)

  app.listen(PORT, () => {
    console.log(`Server running on ${HOST}:${PORT}`)
  })
}

server()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
