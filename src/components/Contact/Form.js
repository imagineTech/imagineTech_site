import React from 'react';

const ContactForm = ({ submit, change }) => {
    return (
        
        <form onSubmit={submit}>
					<input type="text" name="name" onChange={change} placeholder="Name"/>
					<input type="email" name="email" onChange={change} placeholder="Email"/>
					<input type="text" name="phoneNumber" onChange={change} placeholder="Phone Number"/>
					<input type="text" name="message" onChange={change} placeholder="Message"/>
					<button>Contact us</button>
        </form>
        
    )
}

export default ContactForm;