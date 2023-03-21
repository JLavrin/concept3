import express from 'express'

const liveRouter = express.Router()

liveRouter.get('/', (req, res) => {
   res
     .status(200)
     .send('Live Positions')
})

export default liveRouter
