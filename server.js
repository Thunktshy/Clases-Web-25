// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // or 3005, just be consistent with what you open in the browser

// Serve static files from THIS folder
app.use(express.static(__dirname));

// Default route → index.html in this folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
