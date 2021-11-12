import React from "react";
import { useSelector } from "react-redux";
import ContactCard from "./ContactsCard";
function ContactList() {
    const contact = useSelector((state) => state.contactReducers.contacts);

    return (
        <div>
            {contact.map((el) => (
                <ContactCard key={el.id} el={el} />
            ))}
        </div>
    );
}

export default ContactList;
