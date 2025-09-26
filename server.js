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

/**
 * STATIC FILES → c9-22-25/
 */
const STATIC_DIR = path.resolve(process.cwd(), 'c9-22-25');

app.use(express.static(STATIC_DIR, {
  index: 'paginas/index.html', 
  maxAge: '1d'
}));

/**
 * ROOT ROUTE (fallback)
 */
app.get('/', (_req, res) => {
  res.sendFile(path.join(STATIC_DIR, 'paginas', 'index.html'));
});

/**
 * START SERVER
 */
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
