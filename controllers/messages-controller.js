class MessagesController {
    constructor({messagesServices}) {
        this.messagesServices = messagesServices;
    }

    async getMessages(req, res) {
        try {
            const {myId, to} = req.query;
            const projectedMessages = await this.messagesServices.getPrivateMessages(myId, to);
            res.json(projectedMessages);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = MessagesController;
