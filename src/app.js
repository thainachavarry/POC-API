const mongoose = require('mongoose')
const express = require('express');

const taskRouter = require('./routes/task')

class App {
  constructor() {
    this.server = express()

    this.database()
    this.middlewares()
    this.routes()
  }

  database() {
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
  }

  middlewares() {
    this.server.use(express.json())
  }

  routes() {
    this.server.use(taskRouter)
  }
}

module.exports = new App().server