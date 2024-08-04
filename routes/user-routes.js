const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer-upload');

module.exports = ({userController}) => {
    router.get('/', userController.getUsers.bind(userController));
    router.post('/',upload.single('profilePicture'), userController.createUser.bind(userController));
    return router;
};