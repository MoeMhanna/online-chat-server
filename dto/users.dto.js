class UserDto {
    constructor(id, username, firstname, lastname, email) {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }
}

module.exports = UserDto;