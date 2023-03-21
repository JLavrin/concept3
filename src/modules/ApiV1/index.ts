import express from 'express'
import liveRouter from 'src/modules/ApiV1/liveRouter'

const ApiV1 = express.Router()

ApiV1.get('/', (req, res) => {
  res
    .status(200)
    .send('ApiV1 working properly')
})

ApiV1.use('/live', liveRouter)

export default ApiV1
