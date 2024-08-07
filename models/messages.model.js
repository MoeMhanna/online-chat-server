const mongoose = require('mongoose');
const {Schema} = mongoose;

const messageSchema = new Schema({
    message: {
        text: {
            type: String,
            required: true
        }
    },
    users: {
        type: [String],
        required: true
    },
    sender: {
        type: String,
        required: true
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
