const test = require('../data/netflix')

const getById = (id) => {
    return test.find(f => f.id === parseInt(id))
}

module.exports = { getById }