const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    profilePicture: Joi.any().optional(),
});

const validateUser = (data) => {
    return userSchema.validate(data, {abortEarly: false});
};

module.exports = validateUser;