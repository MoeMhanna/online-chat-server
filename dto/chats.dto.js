class ChatsDto {
    constructor(otherUserFirstName, otherUserLastName, otherUserId, lastMessage, lastMessageDate) {
        this.otherUserFirstName = otherUserFirstName;
        this.otherUserLastName = otherUserLastName;
        this.otherUserId = otherUserId;
        this.lastMessage = lastMessage || '';
        this.lastMessageDate = lastMessageDate || '';
    }
}

module.exports = ChatsDto;