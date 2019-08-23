import Router from 'express'
import axios from '../config'

const router = Router()

router.get('/alcohol/:name*', async (req, res, next) => {
  const payload = req.sanitize(req.params.name)
  const alcohol = await axios.get(`/filter.php?a=${payload}`)
  res.json(alcohol.data)
})

router.get('/glasses/:name*', async (req, res, next) => {
  const payload = req.sanitize(req.params.name)
  const glasses = await axios.get(`/filter.php?g=${payload}`)
  res.json(glasses.data)
})

router.get('/categories/:name*', async (req, res, next) => {
  const payload = req.sanitize(req.params.name)
  const categories = await axios.get(`/filter.php?c=${payload}`)
  res.json(categories.data)
})

router.get('/ingredients/:name*', async (req, res, next) => {
  const payload = req.sanitize(req.params.name)
  const ingredients = await axios.get(`/filter.php?i=${payload}`)
  res.json(ingredients.data)
})

export default router
