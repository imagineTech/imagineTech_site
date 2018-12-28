import React from 'react';
import { Input, Button, Form, InputGroup, InputGroupAddon } from 'reactstrap';

const ContactForm = ({ submit, change }) => {
    return (
        <form onSubmit={submit}>
            <div class="form-group">
                <input type="text" name="input_one" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" onChange={change}/>
            </div>
            <div class="form-group">
                <input type="email" name="input_two" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={change} />
            </div>
            <div class="form-group">
                <textarea name="input_three" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
            </div>
            <Button>Contact Us</Button>
        </form>
    )
}

export default ContactForm;
