import express from 'express'
import listsRoutes from './lists'
import randomRoute from './random'

const api = express()

api.get('/', (req, res) => {
  res.send({
    message: 'Hello from the API'
  })
})

api.use('/lists', listsRoutes)
api.use('/random', randomRoute)

export default api
