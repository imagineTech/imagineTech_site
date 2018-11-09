import React from 'react';

const ContactForm = ({ submit, change }) => {
    return (
        <form onSubmit={submit}>
            <label>Name: 
               <input type="text" name="name" onChange={change} />
            </label>
            {' '}
            <label>Email:
                <input type="text" name="email" onChange={change} />
            </label>
            {' '}
            <label>Phone Number:
                <input type="text" name="phoneNumber" onChange={change} />
            </label>
            {' '}
            <label>Message:
                <input type="text" name="message" onChange={change} />
            </label>
            {' '}
            <button>Contact Us</button>
        </form>
    )
}

export default ContactForm;