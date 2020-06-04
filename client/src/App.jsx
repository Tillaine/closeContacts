import React from 'react'
import Chart from './Chart.jsx'
import Contacts from './Contacts.jsx'
import { tempContacts } from '../tempContacts.js'


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            contacts : tempContacts, 
            risks: []
        }
    }

    componentDidMount () {
        fetch('http://localhost:3000/api/contacts/')
        .then(data => data.json())
        .then(data => {
            console.log('fetched', data.risks)
            this.setState({contacts: data.contact, risks: data.risks})
        })
        .catch(err => console.log(err))
    }

    render () {
       return ( 
        <div className='appContainer'>
            <h1>Goodbye Covid</h1>
            <Chart risks={this.state.risks} contacts={this.state.contacts}/>
            <Contacts contacts={this.state.contacts} />
        </div>
       )

    }
}

export default App;