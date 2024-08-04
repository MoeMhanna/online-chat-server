const {createContainer, asClass, asFunction, asValue} = require('awilix');

const container = createContainer();

container.register({
    userController: asClass(require('./controllers/users-controllers')).singleton(),
    userServices: asClass(require('./services/user-services')).singleton(),
    userRepository: asClass(require('./repositories/user-repository')).singleton(),
})

module.exports = container;
