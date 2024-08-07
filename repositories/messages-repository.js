const Messages = require('../models/messages.model');

class MessagesRepository {
    async getMessages(from, to) {
        return Messages.find({
            $or: [
                {sender: from, receiver: to},
                {sender: to, receiver: from}
            ]
        });
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
