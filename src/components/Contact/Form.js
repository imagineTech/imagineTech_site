import React from 'react';

const ContactForm = ({ submit, change }) => {
  return (
    <form onSubmit={submit} class="form-inline">
      <div class="form-group custom">
        <label class="sr-only" for="subscribe-email">
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={change}
          placeholder="Name"
          class="subscribe-email form-control"
          id="subscribe-email"
        />
      </div>
      <br />
      <div class="form-group custom">
        <label class="sr-only" for="subscribe-email">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          onChange={change}
          placeholder="Email"
          class="subscribe-email form-control"
          id="subscribe-email"
        />
      </div>
      <br />
      <div class="form-group custom">
        <label class="sr-only" for="subscribe-email">
          Phone Number
        </label>
        <input
          type="text"
          name="phoneNumber"
          onChange={change}
          placeholder="Phone Number"
          class="subscribe-email form-control"
          id="subscribe-email"
        />
      </div>
      <br />
      <div class="form-group custom">
        <label class="sr-only" for="subscribe-email">
          Message
        </label>
        <input
          type="text"
          name="message"
          onChange={change}
          placeholder="Message"
          class="subscribe-email form-control"
          id="subscribe-email"
        />
      </div>
      <br />
      <button class="btn">Contact</button>
    </form>
  );
};

export default ContactForm;
