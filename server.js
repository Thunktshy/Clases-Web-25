const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3005;

const server = http.createServer((req, res) => {
    // Map URLs to files
    let filePath = req.url;
    
    if (filePath === '/') {
        filePath = '/index.html';
    }
    
    // Full path to the file (remove the leading slash for path.join)
    const fullPath = path.join(__dirname, filePath.substring(1));
    
    // Get file extension for content type
    const extname = path.extname(fullPath).toLowerCase();
    const contentTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.ico': 'image/x-icon'
    };
    
    const contentType = contentTypes[extname] || 'application/octet-stream';
    
    // Read and serve the file
    fs.readFile(fullPath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                res.writeHead(404);
                res.end('File not found');
            } else {
                // Server error
                res.writeHead(500);
                res.end('Server error: ' + err.code);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});