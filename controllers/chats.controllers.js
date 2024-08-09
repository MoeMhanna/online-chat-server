class ChatsControllers {
    constructor({chatServices}) {
        this.chatService = chatServices;
    }

    async getMyChatList(req, res) {
        try {
            const {userId} = req.query;
            console.log(userId);
            const chats = await this.chatService.getMyChatList(userId);
            console.log(chats);
            res.json(chats);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

module.exports = ChatsControllers;