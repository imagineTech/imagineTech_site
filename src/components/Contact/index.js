import React, { Component } from 'react';
import ContactSuccess from './Success';
import ContactForm from './Form';
import Loader from './Loader';
import { addContactData } from './firebase';

import './Contact.css';

class ContactContainer extends Component {
  state = {
    contact_values: {},
    success: false,
    isLoading: false
  };

  submit = e => {
    const { contact_values } = this.state;
    e.preventDefault();
    e.target.reset();
    this.setState({ isLoading: true });
    addContactData(contact_values).then(doc =>
      doc
        ? this.setState(state => ({
            success: !state.success,
            isLoading: !state.isLoading
          }))
        : null
    );
  };

  values = e => {
    const { contact_values } = this.state;
    const { name, value } = e.target;
    this.setState({ contact_values: { ...contact_values, [name]: value } });
  };

  render() {
    const { success, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <ContactForm submit={this.submit} change={this.values} />
        )}
        <ContactSuccess success={success} />
      </div>
    );
  }
}

export default ContactContainer;
