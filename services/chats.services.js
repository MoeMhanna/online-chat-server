const ChatsDto = require("../dto/chats.dto");

class ChatsServices {
    constructor({messagesServices, userServices}) {
        this.messagesService = messagesServices;
        this.userServices = userServices;
    }

    async getMyChatList(myId) {
        const userDtoList = await this.userServices.getAllUsers();
        userDtoList.filter(userDto => userDto.id !== myId);
        const myMessagesBoList = await this.messagesService.getMessages(myId);
        const arr = userDtoList.map(userDto => {
            // console.log(userDto.id);
            const messagesFromOtherUser = myMessagesBoList.filter(message => {
                return message.otherUserId === userDto.id
            });
            messagesFromOtherUser.sort((a, b) => a.createdAt - b.createdAt);
            const lastMessage = messagesFromOtherUser[messagesFromOtherUser.length - 1];
            return new ChatsDto(userDto.firstname, userDto.lastname, userDto.id, lastMessage?.message, lastMessage?.createdAt);
        })
        console.log(arr);
        return arr;
    }
}

module.exports = ChatsServices;