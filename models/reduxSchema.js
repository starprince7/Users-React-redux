const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reduxSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Person = mongoose.model('Person', reduxSchema)

module.exports = Person