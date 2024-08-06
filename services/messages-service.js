


class MessagesService {
    constructor({messagesRepository}) {
        this.messagesRepository = messagesRepository;
    }
    async getMessages(from, to) {
        const messages = await messagesRepository.getMessages(from, to);
        return messages.map((msg) => ({
            fromSelf: msg.sender.toString() === from,
            message: msg.message.text,
        }));
    }

    async addMessage(from, to, message) {
        const data = await messagesRepository.addMessage(from, to, message);
        if (data) return { msg: "Message added successfully." };
        else return { msg: "Failed to add message to the database" };
    }
}

module.exports = new MessagesService();
