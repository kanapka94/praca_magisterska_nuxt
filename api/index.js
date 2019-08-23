import express from 'express'
import expressSanitizer from 'express-sanitizer'
import api from './routes'

const app = express()

app.use(express.json())
app.use(expressSanitizer())
app.use('/api', api)

export default app
