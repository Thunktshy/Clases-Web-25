// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3005;

// Servir archivos estáticos desde la carpeta c9-22-25
app.use(express.static(path.join(__dirname, 'c9-22-25')));

// Redirigir la raíz "/" a "/Diccionario Web"
app.get('/', (req, res) => {
  res.redirect('/Diccionario Web');
});

// Si alguien entra a "/Diccionario Web", servir index.html
app.get('/Diccionario Web', (req, res) => {
  res.sendFile(path.join(__dirname, 'c9-22-25', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
