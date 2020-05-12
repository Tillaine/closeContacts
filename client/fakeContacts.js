

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
}


module.exports = {batchContacts}