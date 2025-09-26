// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from c9-22-25
app.use(express.static(path.join(__dirname, 'c9-22-25')));

// Default route → paginas/index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'c9-22-25', 'paginas', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
