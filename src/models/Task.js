const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: false
  },
  endDate: {
    type: Date,
    required: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Task', TaskSchema)