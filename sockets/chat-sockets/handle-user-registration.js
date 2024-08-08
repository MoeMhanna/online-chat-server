module.exports = function handleUserRegistration(userId, socket, userSocketMap) {
    console.log(`User registered: ${userId} with socket ID ${socket.id}`);
    userSocketMap.set(userId, socket.id);
};