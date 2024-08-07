const express = require('express');
const router = express.Router();

module.exports = ({messagesController}) => {
    router.get('/', messagesController.getMessages.bind(messagesController));
    return router;
};