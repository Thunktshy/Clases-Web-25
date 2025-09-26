// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3005; // mismo puerto que estás usando

// Servir archivos estáticos desde la carpeta c9-22-25
app.use(express.static(path.join(__dirname, 'c9-22-25')));

// Ruta por defecto → index.html dentro de c9-22-25
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'c9-22-25', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
