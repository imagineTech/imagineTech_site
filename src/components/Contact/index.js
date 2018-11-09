import React, { Component } from 'react';
import ContactForm from './Form';

class ContactContainer extends Component {

    state = {
        local: {}
    }

    handleSubmit = e => {
        const { local } = this.state;
        e.preventDefault();
        e.target.reset();
        console.log(local)
    }

    handleChange = e => {
        const { local } = this.state;
        const { name, value } = e.target;
        this.setState({
            local: {...local, [name]: value}
        })
    }

    render() {
        return(
            <div>
                <ContactForm submit={this.handleSubmit} change={this.handleChange} />
            </div>
        )
    }
}

export default ContactContainer;