const UserModel = require('../models/users.model');

class UserRepository {
    constructor() {
    }

    findAll() {
        return UserModel.find();
    }

    create(data) {
        const user = new UserModel(data);
        return user.save();
    }

    findByEmail(email) {
        return UserModel.findOne({email});
    }
}

module.exports = UserRepository;