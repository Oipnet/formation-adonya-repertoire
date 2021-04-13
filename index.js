import express from 'express'
import dotenv from 'dotenv'

import personsRoutes from './routes/persons.js'
import authRoutes from './routes/auth.js'

dotenv.config()

const app = new express()

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/persons', personsRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Serveur listening on ${process.env.PORT}`)
})