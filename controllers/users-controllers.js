validateUser = require('../validators/users-validator');

class UsersController {
    constructor({userServices}) {
        this.userService = userServices;
    }

    async getUsers(req, res) {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async createUser(req, res) {
        try {
            const {error} = validateUser(req.body);
            if (error) {
                return res.status(400).json({message: error.details.map(detail => detail.message).join(', ')});
            }
            const profilePicture = req.file ? {data: req.file.buffer, contentType: req.file.mimetype} : null;
            const user = await this.userService.createUser({
                ...req.body, profilePicture: profilePicture,
            });
            res.status(201).json(user);
        } catch (error) {
            console.error(error);
            res.status(409).json({message: error.message});
        }
    }
}

module.exports = UsersController;
