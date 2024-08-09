const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/auth-middlerware");

module.exports = ({chatController}) => {
        router.get('/my-chats', authMiddleware,(req, res) => chatController.getMyChatList(req, res));
    return router;
};