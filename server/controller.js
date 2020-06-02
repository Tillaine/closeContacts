const { queryMongo } = require('./model')

const getContacts = (req, res) =>  {
    queryMongo()
    .then(contact => {
        const risks = contact.map(contact => addRisk(contact))
        const contacts = { contact, risks }
        console.log(contacts)
        res.send(contacts)
    })
    .catch(err => console.log('err from db', err))
   
    
}

const addRisk = (contact) => {
    let sum = 0
    if( contact.contactMask === false ) {
        sum += 2;
    }
    if( contact.ownMask === false ) {
        sum += 2;
    }
    if( contact.symptom === true ) {
        sum += 2;
    }
    if(contact.proximity === "six feet distance" && sum > 0 ){
        sum - 1;
    }
    return sum;
}



module.exports = { getContacts }