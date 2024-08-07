class MessagesController {
    constructor({messagesServices}) {
        this.messagesServices = messagesServices;
    }

    async getMessages(req, res, next) {
        try {
            const {from, to} = req.body;
            const projectedMessages = await this.messagesServices.getMessages(from, to);
            res.json(projectedMessages);
        } catch (ex) {
            next(ex);
        }
    }
}

module.exports = MessagesController;
