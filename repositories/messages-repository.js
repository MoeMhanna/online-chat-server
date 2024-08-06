const Messages = require('../models/messages.model');

class MessagesRepository {
    async getMessages(from, to) {
        return Messages.find({
            users: {
                $all: [from, to],
            },
        }).sort({ updatedAt: 1 });
    }

    async addMessage(from, to, message) {
        return Messages.create({
            message: { text: message },
            users: [from, to],
            sender: from,
        });
    }
}

module.exports = MessagesRepository;
