const mongoose = require('mongoose');
const {Schema} = mongoose;

const messageSchema = new Schema({
    message: {
        text: {
            type: String,
            required: true
        }
    },
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
