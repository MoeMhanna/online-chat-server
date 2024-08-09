const MessagesDto = require("../dto/private-messages.dto");
const MessagesBo = require("../bo/messages.bo");

class MessagesService {
    constructor({messagesRepository}) {
        this.messagesRepository = messagesRepository;
    }

    async getPrivateMessages(myId, to) {
        const messages = await this.messagesRepository.getPrivateMessages(myId, to);
        return messages.map((msg) =>
            new MessagesDto(msg.sender, myId, msg.message.text, msg.createdAt));
    }

    async getMessages(myId) {
        const messages = await this.messagesRepository.getMessages(myId);
        const messagesBoList = messages.map(async (msg) => {
                const otherUserId = myId === msg.sender ? msg.receiver : msg.sender;
                return new MessagesBo(otherUserId, msg.message.text, msg.createdAt);
            }
        );
        return Promise.all(messagesBoList);
    }

    async addMessage(from, to, message) {
        await this.messagesRepository.addMessage(from, to, message);
    }
}

module.exports = MessagesService;

