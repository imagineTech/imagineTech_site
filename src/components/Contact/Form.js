import React from 'react';

const ContactForm = ({ submit, change }) => {
    return (
        <form onSubmit={submit}>
            <input type="text" name="input_one" onChange={change} />
            <input type="text" name="input_two" onChange={change} />
            <input type="text" name="input_three" onChange={change} />
            <button>Contact Us</button>
        </form>
    )
}

export default ContactForm;