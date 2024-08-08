const {createContainer, asClass, asFunction, asValue} = require('awilix');

const container = createContainer();

container.register({
    authController: asClass(require('./controllers/authentication-controller')).singleton(),
    userController: asClass(require('./controllers/users-controllers')).singleton(),
    userServices: asClass(require('./services/user-services')).singleton(),
    userRepository: asClass(require('./repositories/user-repository')).singleton(),
    messagesController: asClass(require('./controllers/messages-controller')).singleton(),
    messagesServices: asClass(require('./services/messages-service')).singleton(),
    messagesRepository: asClass(require('./repositories/messages-repository')).singleton(),
})

module.exports = container;
