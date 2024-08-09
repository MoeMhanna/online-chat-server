const Messages = require('../models/messages.model');

class MessagesRepository {
    async getPrivateMessages(from, to) {
        return Messages.find({
            $or: [
                {sender: from, receiver: to},
                {sender: to, receiver: from}
            ]
        }).sort({createdAt: 1});
    }

    async getMessages(myId) {
        return Messages.find({
            $or: [
                {sender: myId},
                {receiver: myId}
            ]
        }).sort({createdAt: 1});
    }

    async addMessage(from, to, message) {
        return Messages.create({
            message: {text: message},
            sender: from,
            receiver: to
        });
    }
}

module.exports = MessagesRepository;
