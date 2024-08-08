const container = require('./di-container');
const express = require("express")
const http = require("http");

const connectDB = require('./database');
const setupChatSocket = require('./sockets/chat-sockets/chat-socket');


const app = express()
connectDB();

const server = http.createServer(app);
app.use(express.json())

app.use(express.json());
setupChatSocket(server);

const userRoutes = require('./routes/user-routes')(container.cradle);
app.use('/api/users', userRoutes);

const messageRoutes = require('./routes/messages-routes')(container.cradle);
app.use('/api', messageRoutes);

server.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000")
})

