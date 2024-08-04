class UserServices {
    constructor({userRepository}) {
        this.userRepository = userRepository;
    }

    getAllUsers() {
        return this.userRepository.findAll();
    }

    createUser(data) {
        const {email} = data.email;
        if (this.getUserByEmail(email)) {
            throw new Error("User already exists");
        }

        return this.userRepository.create(data);
    }

    getUserByEmail(email) {
        return this.userRepository.findByEmail(email);
    }
}

module.exports = UserServices;