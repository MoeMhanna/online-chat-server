const socketIo = require('socket.io');
const handleUserRegistration = require('./handle-user-registration');
const handleSendMessage = require('./handle-send-messages');
const handleUserDisconnection = require('./handle-user-disconnections');

const setupChatSocket = (server) => {
    const io = socketIo(server);
    const userSocketMap = new Map();

    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);

        socket.on('register', (userId) => {
            handleUserRegistration(userId, socket, userSocketMap);
        });

        socket.on('sendMessage', async (data) => {
            await handleSendMessage(data, userSocketMap, io);
        });

        socket.on('disconnect', () => {
            handleUserDisconnection(socket, userSocketMap);
        });

    });
    return io;
};

module.exports = setupChatSocket;