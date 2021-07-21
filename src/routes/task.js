const express = require('express')

const TaskController = require('../controllers/task')

const taskRouter = express.Router()

taskRouter.post('/tasks', TaskController.create)
taskRouter.get('/tasks', TaskController.index)
// taskRouter.put('/tasks', TaskController.update)
// taskRouter.delete('/tasks', TaskController.delete)

module.exports = taskRouter