// server.js
'use strict';

require('dotenv').config();
const express  = require('express');
const path     = require('path');

const app  = express();
const PORT = process.env.PORT || 3005;

// (optional) quick request log to debug asset paths
app.use((req, _res, next) => { console.log(req.method, req.url); next(); });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve the entire c9-22-25 directory at /
const STATIC_DIR = __dirname;
app.use(express.static(STATIC_DIR, { maxAge: '1d' }));

// Root -> /index.html (note: NO 'paginas' here)
app.get('/', (_req, res) => {
  res.sendFile(path.join(STATIC_DIR, 'index.html'));
});

// SPA-style fallback only for routes without a file extension
app.get(/^\/(?!.*\.\w+$).*/, (_req, res) => {
  res.sendFile(path.join(STATIC_DIR, 'index.html'));
});

// Proper 404 for missing assets
app.use((_req, res) => res.status(404).send('Not found'));

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
