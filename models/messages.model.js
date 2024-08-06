const mongoose = require("mongoose");
const schema = mongoose.Schema

const messageSchema = new schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
    message: {
        text: {
            type: String, required: true,
        }
    },
    date: {
        type: Date, default: Date.now
    }
})

const MessageModel = mongoose.model("Message", messageSchema)

module.exports = MessageModel;