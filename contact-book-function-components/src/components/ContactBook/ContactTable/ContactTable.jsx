import { useState, useEffect } from "react";
import ContactItem from "./ContactItem/ContactItem";
export default function ContactTable(props) {
  const { contacts, ApiDeleteAndUpdate, ApiPutAndUpdate, fields } = props;

  return (
    <ul className="js-ContactList">
      {contacts
        ? contacts.map((contact) => (
            <ContactItem
              contactData={contact}
              key={contact.id}
              fields={fields}
              ApiDeleteAndUpdate={ApiDeleteAndUpdate}
              ApiPutAndUpdate={ApiPutAndUpdate}
            />
          ))
        : ""}
    </ul>
  );
}
