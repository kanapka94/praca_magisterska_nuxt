import Router from 'express'
import axios from '../config'

const router = Router()

router.get('/ingredients', async (req, res, next) => {
  const ingredients = await axios.get('/list.php?i=list')
  res.json(ingredients.data)
})

router.get('/alcohol', async (req, res, next) => {
  const alcohol = await axios.get('/list.php?a=list')
  res.json(alcohol.data)
})

router.get('/categories', async (req, res, next) => {
  const categories = await axios.get('/list.php?c=list')
  res.json(categories.data)
})

router.get('/glasses', async (req, res, next) => {
  const glasses = await axios.get('/list.php?g=list')
  res.json(glasses.data)
})

export default router
