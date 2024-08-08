const UserModel = require('../models/users.model');

class UserRepository {
    findAll() {
        return UserModel.find();
    }

    create(data) {
        const user = new UserModel(data);
        return user.save();
    }

    findByEmail(email) {
        return UserModel.findOne({email: email});
    }
}

module.exports = UserRepository;