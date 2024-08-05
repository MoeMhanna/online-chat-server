class UserServices {
    constructor({userRepository}) {
        this.userRepository = userRepository;
    }

    getAllUsers() {
        return this.userRepository.findAll();
    }

    async createUser(data) {
        const email = data.email;
        if (await this.getUserByEmail(email)) {
            throw new Error("User already exists");
        }
        return this.userRepository.create(data);
    }

    async getUserByEmail(email) {
        try {
             const user = await this.userRepository.findByEmail(email);
            return !!user;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}

module.exports = UserServices;