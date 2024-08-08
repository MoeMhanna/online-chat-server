const express = require('express');
const authMiddleware = require("../middleware/auth-middlerware");
const router = express.Router();

module.exports = ({messagesController}) => {
    router.get('/messages', authMiddleware, (req, res) => messagesController.getMessages(req, res));
    return router;
};