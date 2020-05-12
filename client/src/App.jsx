import React from 'react'
import Chart from './Chart.jsx'
import Contacts from './Contacts.jsx'
import { batchContacts } from '../fakeContacts'


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            contacts : batchContacts(14)
        }
    }

    render () {
        console.log('batch', this.state.contacts)
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