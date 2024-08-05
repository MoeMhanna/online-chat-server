class UserServices {
    constructor({userRepository}) {
        this.userRepository = userRepository;
    }

    getAllUsers() {
        return this.userRepository.findAll();
    }

    createUser(data) {
        const email = data.email;
        if (this.getUserByEmail(email)) {
            throw new Error("User already exists");
        }

        return this.userRepository.create(data);
    }

    async getUserByEmail(email) {
        try {
            await this.userRepository.findByEmail(email);
            return true;
        } catch (err) {
            console.log(err);
            return false
        }
    }
}

module.exports = UserServices;