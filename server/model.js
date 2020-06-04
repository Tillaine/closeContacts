const { getContacts } = require('./mongoDB.js')

const queryMongo = () => {
return getContacts()


}

queryMongo()

module.exports = { queryMongo }