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
    await Item.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
        if (err) {
            res.json({ err })
        } else {
            res.json({ item: doc })
        }
    })
}

const deleteItem = async (req, res) => {
    await Item.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) {
            res.json({ err })
        } else {
            res.json({ doc })
        }
    })
}

const deleteAll = async (req, res) => {
    const items = await Item.find()
    const ids = items.map(item => _id = item.id)
    const response = await Item.deleteMany({ _id: ids })
    res.json({ deleteCount: response.deletedCount })
    
}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
    deleteAll
}