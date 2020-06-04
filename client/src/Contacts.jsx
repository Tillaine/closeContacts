import React from 'react'
import Contact from './Contact.jsx'

const Contacts = (props) => {
    console.log('contacts', props.contacts)
    return (
        <div className='contactList'>
            <ul>
                {props.contacts.map(contact => {
                        return <Contact key={contact.date} data={contact} />
                    })
                }
            </ul>
        </div>
    )
}

export default Contacts