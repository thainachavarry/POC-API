const express = require('express')
const mongoose = require('mongoose')

const taskRouter = require('./routes/task')

const app = express()

const PORT = process.env.PORT ?? 3000
const MONGO_URL = 'mongodb://thatadoida:fisicas2@cluster0-shard-00-00.1qlty.mongodb.net:27017,cluster0-shard-00-01.1qlty.mongodb.net:27017,cluster0-shard-00-02.1qlty.mongodb.net:27017/apiTasks?ssl=true&replicaSet=atlas-1lc966-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(MONGO_URL, {
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