const express = require('express');

const app = express();
const PORT = 3000;

const postRouter = require('./src/routes/posts.routes');

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to Blogify API');
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 