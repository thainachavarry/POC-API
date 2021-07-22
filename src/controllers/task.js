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

  async show(request, response) {
    const { id } = request.params
    const task = await Task.findById(id)

    if (!task) {
      return response.status(404).json({
        error: 'Task not found'
      })
    }

    return response.status(200).json(task)
  }
  
  async update(request, response) {
    const { id } = request.params

    const task = await Task.findByIdAndUpdate(id, request.body, { new: true })
    return response.status(200).json(task)
  }

  async delete(request, response) {
    const { id } = request.params
    const task = await Task.findByIdAndDelete(id)
    return response.status(200).json(task)
  }
}

module.exports = new TaskController()