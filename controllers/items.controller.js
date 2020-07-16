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

module.exports = {
    getItems,
    getItem,
    createItem
}