const { Schema, model } = require('mongoose')

const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now()
    }
}, {
    collection: 'todos_collection',
    versionKey: false
})

module.exports = model('Item', itemSchema)