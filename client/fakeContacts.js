
const { addManyContacts } = require('../server/mongoDB.js') 
const lNames = ['Cup', 'Bartges', 'Noles', 'Obama', 'Sanchez', 'Moreno', 'Beck'];
const fNames = ['Evan', 'Nick', 'Lucy', 'Andrew', 'Rachel', 'Michelle', 'Gigi'];
const random = (arr) => arr[Math.floor(Math.random() * arr.length)]
const symptom = [true, false]
const ownMask = [true, false]
const contactMask = [true, false]
let date = 1
const proximity = ['Physical Contact', 'less than 6 feet', 'six feet distance']

const MakeContact = () => {
    const contact = {};
    contact.proximity = random(proximity);
    contact.last = random(lNames);
    contact.first = random(fNames);
    contact.date = `May ${date}`;
    contact.symptom = random(symptom)
    contact.ownMask = random(ownMask)
    contact.contactMask = random(contactMask)
    date = date < 30 ? date + 1 : 1
    return contact;
}

const batchContacts = (num) => {
    contacts = []
    while (contacts.length < num){
        contacts.push(MakeContact())
    }
    return contacts
};

// *********************************
// Seed database
// *********************************
const seed = (num) => {
   addManyContacts(batchContacts(num))
   .then(contacts => {
       console.log(contacts)
   })
   .catch(err => console.log('seed err', err))
}

// seed(14)

tempContacts = [
    {
        "_id": "5ebb63f61a1cf62753215405",
        "proximity": "six feet distance",
        "last": "Bartges",
        "first": "Michelle",
        "date": "May 1",
        "symptom": true,
        "ownMask": false,
        "contactMask": false
    },
    {
        "_id": "5ebb63f61a1cf62753215406",
        "proximity": "Physical Contact",
        "last": "Cup",
        "first": "Evan",
        "date": "May 2",
        "symptom": false,
        "ownMask": true,
        "contactMask": true
    },
    {
        "_id": "5ebb63f61a1cf62753215407",
        "proximity": "Physical Contact",
        "last": "Cup",
        "first": "Lucy",
        "date": "May 3",
        "symptom": false,
        "ownMask": false,
        "contactMask": false
    },
    {
        "_id": "5ebb63f61a1cf62753215408",
        "proximity": "less than 6 feet",
        "last": "Cup",
        "first": "Gigi",
        "date": "May 4",
        "symptom": true,
        "ownMask": false,
        "contactMask": false
    },
    {
        "_id": "5ebb63f61a1cf62753215409",
        "proximity": "less than 6 feet",
        "last": "Moreno",
        "first": "Nick",
        "date": "May 5",
        "symptom": true,
        "ownMask": false,
        "contactMask": true
    },
    {
        "_id": "5ebb63f61a1cf6275321540a",
        "proximity": "six feet distance",
        "last": "Beck",
        "first": "Gigi",
        "date": "May 6",
        "symptom": true,
        "ownMask": false,
        "contactMask": false
    },
    {
        "_id": "5ebb63f61a1cf6275321540b",
        "proximity": "less than 6 feet",
        "last": "Sanchez",
        "first": "Lucy",
        "date": "May 7",
        "symptom": true,
        "ownMask": false,
        "contactMask": true
    },
    {
        "_id": "5ebb63f61a1cf6275321540c",
        "proximity": "Physical Contact",
        "last": "Sanchez",
        "first": "Evan",
        "date": "May 8",
        "symptom": false,
        "ownMask": true,
        "contactMask": true
    },
    {
        "_id": "5ebb63f61a1cf6275321540d",
        "proximity": "less than 6 feet",
        "last": "Sanchez",
        "first": "Rachel",
        "date": "May 9",
        "symptom": true,
        "ownMask": false,
        "contactMask": false
    },
    {
        "_id": "5ebb63f61a1cf6275321540e",
        "proximity": "less than 6 feet",
        "last": "Moreno",
        "first": "Rachel",
        "date": "May 10",
        "symptom": false,
        "ownMask": false,
        "contactMask": true
    },
    {
        "_id": "5ebb63f61a1cf6275321540f",
        "proximity": "six feet distance",
        "last": "Noles",
        "first": "Gigi",
        "date": "May 11",
        "symptom": false,
        "ownMask": true,
        "contactMask": true
    },
    {
        "_id": "5ebb63f61a1cf62753215410",
        "proximity": "Physical Contact",
        "last": "Moreno",
        "first": "Gigi",
        "date": "May 12",
        "symptom": false,
        "ownMask": false,
        "contactMask": false
    },
    {
        "_id": "5ebb63f61a1cf62753215411",
        "proximity": "six feet distance",
        "last": "Cup",
        "first": "Lucy",
        "date": "May 13",
        "symptom": false,
        "ownMask": false,
        "contactMask": true
    },
    {
        "_id": "5ebb63f61a1cf62753215412",
        "proximity": "Physical Contact",
        "last": "Sanchez",
        "first": "Nick",
        "date": "May 14",
        "symptom": true,
        "ownMask": true,
        "contactMask": false
    }
]

module.exports = { batchContacts, tempContacts }

