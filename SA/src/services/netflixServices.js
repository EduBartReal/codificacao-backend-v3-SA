const test = require('../data/netflix')

const getById = (id) => {
  return test.find(f => f.id === parseInt(id))
}

const getAll = () => {
  return test
}

module.exports = { getById, getAll }