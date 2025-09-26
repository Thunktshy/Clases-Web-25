// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3005;

// Serve static files from c9-22-25
app.use(express.static(path.join(__dirname, 'c9-22-25')));

// Default route → paginas/index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'c9-22-25', 'paginas', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


// server.js
'use strict';

require('dotenv').config();

/**
 * IMPORTS (con comentarios de referencia)
 */
const express  = require('express');     // Servidor HTTP
const cors     = require('cors');        // CORS
const session  = require('express-session'); // Sesiones de usuario
const path     = require('path');        // Rutas de archivos

// Conector con la base de datos (pool + utilidades)
const { db } = require('./db/dbconnector.js');

/**
 * APP y MIDDLEWARES BASE
 */
const app = express();
app.use(express.static('Public'));                 // estáticos públicos
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'change-this',
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: { maxAge: 60 * 60 * 1000 } // 1h
}));

const PUBLIC_DIR = path.resolve(process.cwd(), 'Public');

// Servir archivos estáticos (css/, scripts/, imágenes, etc.)
app.use(express.static(PUBLIC_DIR, {
  index: 'index.html',      // sirve /Public/index.html en "/"
  maxAge: '1d',             // cache estáticos (opcional)
}));

// Ruta explícita a "/" 
app.get('/', (_req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});
