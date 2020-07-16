const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()
const { Router } = require('express')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('./controllers/items.controller')

const PORT = process.env.PORT || 3000
const DB_URI = `mongodb+srv://admin:${process.env.DB_PASSWORD}@node.ujzh6.gcp.mongodb.net/todos_db`

const app = express()
const router = Router()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: ['https://todo-list-2020-6c5c0.firebaseapp.com/', 'http://127.0.0.1:5500/']
}))

router
    .get('/api/items', getItems)
    .get('/api/items/:id', getItem)
    .post('/api/items', createItem)
    .put('/api/items/:id', updateItem)
    .delete('/api/items/:id', deleteItem)

app.use(router)

async function start() {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log('Server has been started on port: ', PORT)
        })
    } catch (error) {
        console.error(error);
    }
}

start()
console.log(process.env.DB_PASSWORD);