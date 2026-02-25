const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/blogify')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

const postRoutes = require('./src/routes/posts.routes')

app.use('/api/v1/posts', postRoutes)

app.listen(3000, () => {
  console.log('Server running on port 3000')
})