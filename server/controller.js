const { queryMongo } = require('./model')

const getContacts = (req, res) =>  {
    queryMongo()
    .then(contact => {
        res.send(contact)
    })
    .catch(err => console.log('err from db', err))
   
    
}




module.exports = { getContacts }