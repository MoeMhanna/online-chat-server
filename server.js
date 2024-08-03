const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);

// Create WebSocket server on top of the existing HTTP server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('A new client connected.');

    ws.on('message', (message) => {
        console.log('Received message:', message.toString());

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    ws.on('close', () => {
        console.log('A client disconnected.');
    });
});

// Define a simple route to serve as an endpoint
app.get('/', (req, res) => {
    res.send('WebSocket server is running');
});

// Start the server on a specific port
const port = 3000;
server.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
