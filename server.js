const { Server } = require('http');
const app = require('./app');
const http = require('http');
const PORT = process.env.port || 8080;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log("Started server on port ", PORT);
});