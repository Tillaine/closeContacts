import React from 'react'
import Chart from './Chart.jsx'
import Contacts from './Contacts.jsx'
import { tempContacts } from '../tempContacts.js'


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            contacts : tempContacts
        }
    }

    componentDidMount () {
        fetch('http://localhost:3000/api/contacts/')
        .then(data => data.json())
        .then(data => console.log('fetched', data))
        .catch(err => console.log(err))
    }

    render () {
       return ( 
        <div className='appContainer'>
            <h1>Goodbye Covid</h1>
            <Chart/>
            <Contacts contacts={this.state.contacts} />
        </div>
       )

    }
}

export default App;