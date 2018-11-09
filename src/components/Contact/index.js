import React, { Component } from 'react';
import ContactSuccess from './Success';
import ContactForm from './Form';
import { addContactData } from './firebase';

class ContactContainer extends Component {

    state = {
        contact_values: {},
        success: false
    }

    submit = e => {
        const { contact_values, success } = this.state;
        e.preventDefault();
        e.target.reset();
        addContactData(contact_values).then(doc => doc ? this.setState({ success: !success }) : null);
    }

    values = e => {
        const { contact_values } = this.state;
        const { name, value } = e.target;
        this.setState({ contact_values: { ...contact_values, [name]: value } })
    }

    render() {
        const { success } = this.state;
        return(
            <div>
                <ContactForm submit={this.submit} change={this.values} />
                <ContactSuccess success={success} />
            </div>
        )
    }
}

export default ContactContainer;