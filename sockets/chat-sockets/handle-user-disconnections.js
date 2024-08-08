module.exports = function handleUserDisconnection(socket, userSocketMap) {
    console.log('A user disconnected:', socket.id);

    for (let [userId, socketId] of userSocketMap.entries()) {
        if (socketId === socket.id) {
            userSocketMap.delete(userId);
            break;
        }
    }
};
