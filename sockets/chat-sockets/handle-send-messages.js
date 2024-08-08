const container = require('../../di-container');


const handleSendMessage = async ({from, to, message}, userSocketMap, io) => {
    try {
        const messagesService = container.resolve('messagesServices');
        await messagesService.addMessage(from, to, message);
        console.log('Message saved to the database');
    } catch (error) {
        console.error('Failed to save message:', error);
    }

    const recipientSocketId = userSocketMap.get(to);
    if (recipientSocketId) {
        io.to(recipientSocketId).emit('receiveMessage', {from, message});
    }
};

module.exports = handleSendMessage;