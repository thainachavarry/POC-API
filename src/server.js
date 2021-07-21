require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const taskRouter = require('./routes/task')

const app = express()

const PORT = process.env.PORT ?? 3000

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log(`Application connected to database`)
})

mongoose.connection.on('disconnected', () => {
  console.log(`Application disconnected to database`)
})

app.use(express.json())

app.use(taskRouter)

app.listen(PORT, () => console.log(`🚀 Server running in port ${PORT}`))