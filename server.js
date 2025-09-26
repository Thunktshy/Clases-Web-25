// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3005;

// Sirve archivos estáticos desde la carpeta actual
app.use(express.static(__dirname));

// Ruta por defecto → index.html en la raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
