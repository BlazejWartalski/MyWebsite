const http = require('http');

// Create server object
http.createServer((req, res) => {
    // Wrtite response
    res.write('hello worldd');
    res.end()
}).listen(5000, () => console.log('server running'));