const express = require('express');
const router = express.Router();

module.exports = ({messagesController}) => {
    router.get('/messages', (req, res) => messagesController.getMessages(req, res));
    return router;
};