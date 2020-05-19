const mongoose = require('mongoose');
console.log('mongoose', mongoose.connect);
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/contacts', {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', function() {
  console.log('db connected!')
});
connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.set('useFindAndModify', false)

let contactModel = new mongoose.Schema({
    id: { type: Number, index: true },
    proximity: String,
    last: String,
    first: String,
    date: String,
    symptom: Boolean,
    ownMask: Boolean,
    contactMask: Boolean
});


let Contact = mongoose.model('Contact', contactModel);

let addManyContacts = (contacts) => {
    console.log(contacts)
    return new Promise((resolve, reject) => {
        Contact.collection.insertMany(contacts, (err, docs) => {
            if(err) { reject(err) }
            else {resolve (docs.length, 'added')}
        })

    })
}


  let addContacts = (contacts) => {
    
    let newContacts = new Contacts(contacts);
    return new Promise((resolve, reject) => {
         newContacts.save((err) => {
           if(err) {reject (err)}
           else { resolve (newContacts) }
         })


    })
  
  
}

let getContacts = () => {
return new Promise((resolve, reject) => {

    Contact.find((err, Contact) => {

      if (err) {reject(err)}
      else {
        resolve(Contact)
    }
  })
})

}

const findById = (id) => {
    return new Promise((resolve, reject) => {
        console.log(id)
        Contact.find({id}, (err, Contact) => {
          if (err) {reject(err)}
          else { resolve(Contact) }
      })
    })
}

const updateMongo = (updates, id) => {
    return new Promise((resolve, reject) => {
    Contact.findByIdAndUpdate({id: id}, {$set: updates}, (err, updated) => {
            if (err) {reject(err)}
            else{ 
                resolve (updated)}
        })
    })
}

const deleteContact = (id) => {
return new Promise((resolve, reject) => {
  Contact.remove({_id: id}, (err, note) => {
    if(err) {reject(err)}
    else{resolve(note) }
  } )

})
}


module.exports = {getContacts, addContacts, addManyContacts, updateMongo, findById, deleteContact}



