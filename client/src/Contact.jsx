import React from 'react'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { first, last } = this.props.data;
        return <li>{ first } { last }</li>
    } 
}

export default Contact
