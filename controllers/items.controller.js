const Item = require('../schemas/item.schema')

const getItems = async (req, res) => {
    const items = await Item.find({})
    res.json({ items })
}

const getItem = async (req, res) => {
    const item = await Item.findById(req.params.id)
    res.json({ item })
}

const createItem = async (req, res) => {
    const item = new Item({
        title: req.body.title
    })
    await item.save()
    res.json({ item })
}

const updateItem = async (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
        if (err) {
            res.json({ err })
        } else {
            res.json({ item: doc })
        }
    })
}

const deleteItem = async (req, res) => {
    Item.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) {
            res.json({ err })
        } else {
            res.json({ doc })
        }
    })
}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}