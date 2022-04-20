import { useState, useEffect } from "react";
import api from "../api/api";

export default function useAPImethod() {
  const [contacts, setContacts] = useState([]);
  const [fields, setFields] = useState([]);
  const [contactTemplate, setContactTemplate] = useState({});

  const getAndRenderContacts = () => {
    api
      .get("contacts")
      .then(({ data }) => {
        setContacts(data);
        return data;
      })
      .then((data) => {
        let fields = Object.keys(data[0]).filter((e) => e !== "id");
        setFields(fields);
        let contactTemplate = {};
        fields.forEach((e) => {
          contactTemplate[e] = ``;
        });
        setContactTemplate(contactTemplate);
      });
  };

  const deleteContact = (id) => {
    api.delete("contacts/" + id).then(() => getAndRenderContacts());
  };

  const addContact = (obj) => {
    console.log(obj);
    api.post("contacts", obj).then(() => getAndRenderContacts());
  };

  const updateContact = (contact) => {
    console.log(contact);
    api
      .put("contacts/" + contact.id, contact)
      .then(() => getAndRenderContacts());
  };

  useEffect(() => {
    getAndRenderContacts();
  }, []);

  return {
    deleteContact,
    addContact,
    updateContact,
    fields,
    contactTemplate,
    contacts,
    setContacts,
  };
}
