const messagesService = require('../services/messages-service');


const toto = async (req, res, next) => {
    try {
        const {from, to} = req.body;

        const messages = await Messages.find({
            users: {
                $all: [from, to],
            },
        }).sort({updatedAt: 1});

        const projectedMessages = messages.map((msg) => {
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text,
            };
        });
        res.json(projectedMessages);
    } catch (ex) {
        next(ex);
    }
};

class MessagesController {
    async getMessages(req, res, next) {
        try {
            const {from, to} = req.body;
            const projectedMessages = await messagesService.getMessages(from, to);
            res.json(projectedMessages);
        } catch (ex) {
            next(ex);
        }
    }

    async addMessage(req, res, next) {
        try {
            const {from, to, message} = req.body;
            const result = await messagesService.addMessage(from, to, message);
            res.json(result);
        } catch (ex) {
            next(ex);
        }
    }
}

module.exports = new MessagesController();
