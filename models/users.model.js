const mongoose = require("mongoose")
const schema = mongoose.Schema
const profilePictureSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String,
});

const userSchema = new schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1024
    },
    profilePicture: profilePictureSchema
})

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel