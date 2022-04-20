import { useContext, useEffect, useState } from "react";
import "./style.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactTable from "./ContactTable/ContactTable";
import useAPImethod from "../../hooks/common";
import ContactDescription from "../common/Description/Description";
import ThemeContext from "../../context/ThemeContext";
import ContactSwitcher from "../common/Switcher/Switcher";
import Button from "../common/Button/Button";

export default function ContactBook() {
  // const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const {
    deleteContact,
    addContact,
    updateContact,
    fields,
    contactTemplate,
    contacts,
    setContacts,
  } = useAPImethod();

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="js-ContactBook">
        <ContactDescription />
        <ContactSwitcher />
        {!showForm ? (
          <>
            <h1>Contact-book</h1>
            <ContactTable
              ApiDeleteAndUpdate={deleteContact}
              ApiPutAndUpdate={updateContact}
              contacts={contacts}
              fields={fields}
            />
          </>
        ) : (
          <>
            <h1>Contact-form</h1>
            <ContactForm
              className="js-Contact-form-post"
              id="js-Contact-form-post"
              onSubmitAPIaction={addContact}
              fields={fields}
              contactTemplate={contactTemplate}
            />
          </>
        )}
        <Button
          onClick={toggleForm}
          value={!showForm ? "Add new contact" : "Show contacts"}
        />
      </div>
    </>
  );
}
