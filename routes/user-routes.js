const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer-upload-middleware');
const authMiddleware = require("../middleware/auth-middlerware");

module.exports = ({userController}) => {
    router.get('/users', authMiddleware, userController.getUsers.bind(userController));
    router.post('/users', authMiddleware, upload.single('profilePicture'), userController.createUser.bind(userController));
    return router;
};