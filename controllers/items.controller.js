const Item = require('../schemas/item.schema')

const getItems = async (req, res) => {
    const items = await Item.find({})
    console.log(items)
}

const getItem = async (req, res) => {
    const item = await Item.findById(req.params.id)
    console.log(item)
}

const createItem = async (req, res) => {
    const item = new Item({
        title: req.body.title
    })
    await item.save()
}

module.exports = {
    getItems,
    getItem,
    createItem
}