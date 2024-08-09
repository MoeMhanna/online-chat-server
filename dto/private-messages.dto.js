class PrivateMessagesDto {
    constructor(sender, myId, message, date) {
        this.message = message;
        this.fromSelf = sender === myId;
        this.createdAt = date;
    }
}

module.exports = PrivateMessagesDto;