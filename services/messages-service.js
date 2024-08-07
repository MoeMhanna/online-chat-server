class MessagesService {
    constructor({messagesRepository}) {
        this.messagesRepository = messagesRepository;
    }

    async getMessages(from, to) {
        const messages = await this.messagesRepository.getMessages(from, to);
        return messages.map((msg) => ({
            fromSelf: msg.sender.toString() === from,
            message: msg.message.text,
        }));
    }

    async addMessage(from, to, message) {
        await this.messagesRepository.addMessage(from, to, message);
    }
}

module.exports = MessagesService;

