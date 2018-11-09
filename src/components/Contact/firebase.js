import { db } from '../../config/firebase';

export const addContactData = contact_obj => {
    return db.collection('contact_info').add({
        Name: contact_obj.name,
        Email: contact_obj.email,
        Phone_Number: contact_obj.phoneNumber,
        Message: contact_obj.message
    })
}