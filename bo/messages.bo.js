class MessagesBo {
    constructor(otherUserId, message, date) {
        this.message = message;
        this.otherUserId = otherUserId;
        this.createdAt = date;
    }
}

module.exports = MessagesBo;