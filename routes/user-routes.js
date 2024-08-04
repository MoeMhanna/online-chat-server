const express = require('express');
const router = express.Router();

module.exports = ({userController}) => {
    router.get('/', userController.getUsers.bind(userController));
    router.post('/', userController.createUser.bind(userController));
    return router;
};