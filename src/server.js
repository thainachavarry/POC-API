const express = require('express')

const app = express()

const PORT = process.env.PORT ?? 3000

app.use(express.json())

app.get('/tasks', (request, response) => {
  response.status(200).json(request.body)
})

app.listen(PORT, () => console.log(`🚀 Server running in port ${PORT}`))