const UserDto = require("../dto/users.dto");

class UserServices {
    constructor({userRepository}) {
        this.userRepository = userRepository;
    }

    async getAllUsers() {
        try {
            const allUsers = await this.userRepository.findAll();
            return allUsers.map((user) => {
                return new UserDto(user.id, user.username, user.firstname, user.lastname, user.email);
            });
        } catch (e) {
            console.log(e);
        }
    }

    async createUser(data) {
        const email = data.email;
        if (!!(await this.getUserByEmail(email))) {
            throw new Error("User already exists");
        }
        return this.userRepository.create(data);
    }

    async getUserByEmail(email) {
        try {
            return await this.userRepository.findByEmail(email);
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}

module.exports = UserServices;