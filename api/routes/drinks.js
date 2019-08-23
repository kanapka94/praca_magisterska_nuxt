import Router from 'express'
import axios from '../config'

const router = Router()

router.get('/id/:id*', async (req, res, next) => {
  const payload = req.sanitize(req.params.id + req.params[0])
  const drink = await axios.get(`/lookup.php?i=${payload}`)
  res.json(drink.data)
})

router.get('/:name*', async (req, res, next) => {
  const payload = req.sanitize(req.params.name + req.params[0])
  const drink = await axios.get(`/search.php?s=${payload}`)
  res.json(drink.data)
})

export default router
