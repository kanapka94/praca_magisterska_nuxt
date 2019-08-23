import Router from 'express'
import axios from '../config'

const router = Router()

router.get('/id/:id', async (req, res, next) => {
  const payload = req.sanitize(req.params.id)
  const ingredient = await axios.get(`/lookup.php?iid=${payload}`)
  res.json(ingredient.data)
})

router.get('/:name', async (req, res, next) => {
  const payload = req.sanitize(req.params.name)
  const ingredient = await axios.get(`/search.php?i=${payload}`)
  res.json(ingredient.data)
})

export default router
