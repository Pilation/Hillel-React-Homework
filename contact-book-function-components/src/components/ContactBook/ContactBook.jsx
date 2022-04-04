import { useEffect, useState } from "react";
import "./style.css";
import * as contactsService from "../../services/ContactBookServices";
import ContactForm from "./ContactForm/ContactForm";
import ContactTable from "./ContactTable/ContactTable";

export default function ContactBook() {
  const [contacts, setContacts] = useState([]);
  const [fields, setFields] = useState([]);
  const [contactTemplate, setContactTemplate] = useState({});
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    contactsService
      .controller(contactsService.contactBaseURL)
      .then((data) => {
        setContacts(data);
        return data;
      })
      .then((data) => {
        let contactTemplateObj = {};
        let fieldsArr = Object.keys(data[0]).filter((e) => e !== "id");
        fieldsArr.forEach((e) => {
          contactTemplateObj[e] = ``;
        });
        setFields(fieldsArr);
        setContactTemplate(contactTemplateObj);
        return data;
      });
  }, []);

  const ApiDeleteAndUpdate = (id) => {
    contactsService
      .controller(contactsService.contactBaseURL + `/` + id, "DELETE")
      .then(() => contactsService.controller(contactsService.contactBaseURL))
      .then((data) => setContacts(data));
  };
  const ApiPostAndUpdate = (obj) => {
    contactsService
      .controller(contactsService.contactBaseURL, "POST", obj)
      .then(() => contactsService.controller(contactsService.contactBaseURL))
      .then((data) => setContacts(data));
  };
  const ApiPutAndUpdate = (obj, id) => {
    contactsService
      .controller(contactsService.contactBaseURL + `/` + id, "PUT", obj)
      .then(() => contactsService.controller(contactsService.contactBaseURL))
      .then((data) => setContacts(data));
  };

  return (
    <div className="js-ContactBook">
      <p className="project-description">
        Contact-Book &amp; Contact-Form adopts API changes. <br />
        Depending on API data, Book &amp; Form shows new fields and inputs.
        <br />
        In Book you can change contact (onSubmit in PUT's to API), delete
        contact (DELETE to API). <br />
        In Form you can fill and submit info (POST to API), clear field with
        Cancel button. <br />
        Change-form in Book and Post-form in Form are the same components.
      </p>
      {!showForm ? (
        <>
          <h1>Contact-book</h1>
          <ContactTable
            ApiDeleteAndUpdate={ApiDeleteAndUpdate}
            ApiPutAndUpdate={ApiPutAndUpdate}
            contacts={contacts}
            fields={fields}
          />
        </>
      ) : (
        <>
          <h1>Contact-form</h1>
          <ContactForm
            id="js-Contact-form-post"
            onSubmitAPIaction={ApiPostAndUpdate}
            fields={fields}
            contactTemplate={contactTemplate}
          />
        </>
      )}
      <button
        type="button"
        className="js-Switcher"
        onClick={() => setShowForm(!showForm)}
      >
        {!showForm ? "Add new contact" : "Show contacts"}
      </button>
    </div>
  );
}
