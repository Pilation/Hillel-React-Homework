import React, { Component } from "react";
import ContactItem from "./ContactItem/ContactItem";
export default class ContactTable extends Component {
  render() {
    const { contacts, onClickRemoveLi } = this.props;
    return (
      <ul className="js-ContactList">
        {contacts
          ? contacts.map((contact) => (
              <ContactItem
                key={contact.id}
                name={contact.name}
                surname={contact.surname}
                phone={contact.phone}
                id={contact.id}
                className={`js-ContactItem`}
                onClickRemoveLi={onClickRemoveLi}
              />
            ))
          : ""}
      </ul>
    );
  }
}
