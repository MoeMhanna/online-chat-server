const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    profilePicture: Joi.string().optional(),
});

const validateUser = (data) => {
    return userSchema.validate(data, {abortEarly: false});
};

module.exports = validateUser;