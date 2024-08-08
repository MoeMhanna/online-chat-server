const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer-upload');

module.exports = ({userController}) => {
    router.get('/users', userController.getUsers.bind(userController));
    router.post('/users',upload.single('profilePicture'), userController.createUser.bind(userController));
    return router;
};