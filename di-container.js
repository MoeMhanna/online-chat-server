const {createContainer, asClass} = require('awilix');

const container = createContainer();

container.register({
    authController: asClass(require('./controllers/authentication-controller')).singleton(),
    chatController: asClass(require('./controllers/chats.controllers')).singleton(),
    userController: asClass(require('./controllers/users-controllers')).singleton(),
    userServices: asClass(require('./services/user-services')).singleton(),
    chatServices: asClass(require('./services/chats.services')).singleton(),
    userRepository: asClass(require('./repositories/user-repository')).singleton(),
    messagesController: asClass(require('./controllers/messages-controller')).singleton(),
    messagesServices: asClass(require('./services/messages-service')).singleton(),
    messagesRepository: asClass(require('./repositories/messages-repository')).singleton(),
})

module.exports = container;
