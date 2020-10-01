const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    date: {
        type: Date,
        required: false,
        date: Date.now,
        date2: Date()
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User