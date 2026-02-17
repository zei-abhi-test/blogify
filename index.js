const express = require('express');

const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to Blogify API');
});

// Posts route (normal way)
app.get('/api/v1/posts', (req, res) => {
  res.send('Fetching all blog posts...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 