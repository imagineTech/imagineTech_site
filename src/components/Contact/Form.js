import React from 'react';

const ContactForm = ({ submit, change }) => {
    return (
        <form onSubmit={submit}>
            <input type="text" name="name" onChange={change} />
            <input type="text" name="email" onChange={change} />
            <input type="text" name="phoneNumber" onChange={change} />
            <input type="text" name="message" onChange={change} />
            <button>Contact Us</button>
        </form>
    )
}

export default ContactForm;