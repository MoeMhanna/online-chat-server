const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);

const wss = new WebSocket.Server({port: 8080});

wss.on('connection', (ws) => {
    console.log('A new client connected.');

    // Event listener for incoming messages
    ws.on('message', (message) => {
        console.log('Received message:', message.toString());

        // Broadcast the message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    // Event listener for client disconnection
    ws.on('close', () => {
        console.log('A client disconnected.');
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});