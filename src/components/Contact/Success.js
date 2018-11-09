import React from 'react';

const ContactSuccess = ({ success }) => {
    return (
        <div>
            {success ? <h3>Message Sent! Someone will be in touch :)</h3> : null}
        </div>
    )
}

export default ContactSuccess;