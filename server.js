// server.js
'use strict';

require('dotenv').config();

const express  = require('express');
const path     = require('path');

const app  = express();
const PORT = process.env.PORT || 3005;

/**
 * BASE MIDDLEWARES
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PUBLIC_DIR = path.resolve(process.cwd(), 'c9-22-25');

// Servir archivos estáticos (css/, scripts/, imágenes, etc.)
app.use(express.static(PUBLIC_DIR, {
  index: 'index.html',      // sirve /Public/index.html en "/"
  maxAge: '1d',             // cache estáticos (opcional)
}));

// Ruta explícita a "/" 
app.get('/', (_req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});


/**
 * START SERVER
 */
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
