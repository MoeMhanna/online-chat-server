const express = require('express');
const upload = require("../middleware/multer-upload-middleware");
const router = express.Router();


module.exports = ({authController}) => {
    router.post('/register', upload.single('profilePicture'), authController.register.bind(authController));
    router.post('/login', authController.login.bind(authController));
    return router;
};