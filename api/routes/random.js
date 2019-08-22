import Router from 'express'
import axios from '../config'

const router = Router()

router.get('/', async (req, res, next) => {
  const ingredients = await axios.get('/random.php')
  res.json(ingredients.data)
})

export default router
