import express from 'express'
import listsRoutes from './lists'
import filtersRoutes from './filter'
import drinksRoutes from './drinks'
import ingredientsRoutes from './ingredients'
import randomRoute from './random'

const api = express()

api.get('/', (req, res) => {
  res.send({
    message: 'Hello from the API'
  })
})

api.use('/lists', listsRoutes)
api.use('/filters', filtersRoutes)
api.use('/drinks', drinksRoutes)
api.use('/ingredients', ingredientsRoutes)
api.use('/random', randomRoute)

export default api
