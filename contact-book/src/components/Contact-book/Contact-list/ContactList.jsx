import React, { Component } from "react";

import ContactItem from "../Contact-item/ContactItem";

export default class ContactList extends Component {
  state = {
    //
  };
  constructor() {
    super();
  }
  render() {
    const { contacts, RemoveLi } = this.props;
    return (
      <ul className="js-ContactList">
        {contacts
          ? contacts.map((contact) => (
              <ContactItem
                key={contact.id}
                name={contact.name}
                surname={contact.sername}
                phone={contact.phone}
                id={contact.id}
                className={`js-ContactItem`}
                RemoveLi={RemoveLi}
              />
            ))
          : ""}
      </ul>
    );
  }
}
