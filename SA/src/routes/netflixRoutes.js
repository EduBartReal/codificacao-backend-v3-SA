const express = require('express')
const netflixRouter = express.Router()

const netflixServices = require('../services/netflixServices')

netflixRouter.get('/:id', (req, res) => {
    const netflix = netflixServices.getById(req.params.id)

    if (!netflix) {
        return res.status(404).json({
            message: 'netflix not found'
        })}

    res.json(netflix)
})

fruitRouter.get('/', (req, res) => {
    const netflixs = require('../data/netflix')
    res.json(netflixs)
})

module.exports = netflixRouter