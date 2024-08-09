const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
validateUser = require('../validators/users-validator');

class AuthController {
    constructor({userServices}) {
        this.userService = userServices;
    }

    async register(req, res) {
        try {
            const {error} = validateUser(req.body);
            if (error) {
                return res.status(400).json({message: error.details.map(detail => detail.message).join(', ')});
            }
            const {username, firstname, lastname, email, password} = req.body;
            const existingUser = await this.userService.getUserByEmail(email);
            if (existingUser) {
                return res.status(409).json({message: 'User already exists'});
            }

            const profilePicture = req.file ? {data: req.file.buffer, contentType: req.file.mimetype} : null;
            const user = await this.userService.createUser({
                username,
                firstname,
                lastname,
                email,
                password,
                profilePicture: profilePicture,
            });

            res.status(201).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Registration failed'});
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body;
            const user = await this.userService.getUserByEmail(email);
            if (!user || (password !== user.password)) {
                return res.status(401).json({message: 'Invalid email or password'});
            }

            const payload = {userId: user._id, username: user.username, email: user.email};
            const token = jwt.sign(payload, process.env.JWT_SECRET);

            res.json({token});
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Login failed'});
        }
    }
}

module.exports = AuthController;
