const Task = require('../models/Task')

class TaskController {
  async create(request, response) {
    if (!request.body.name) {
      return response.status(400).json({
        error: 'Bad request: name not provided'
      })
    }

    const task = await Task.create(request.body)

    return response.status(201).json(task)
  }

  async index(request, response) {
    const tasks = await Task.find()
    return response.status(200).json(tasks)
  }
}

module.exports = new TaskController()