import { useState } from "react";
import ContactFormInput from "./ContactFormInput/ContactFormInput";

export default function ContactForm(props) {
  const {
    onSubmitAPIaction,
    id,
    fields,
    contactTemplate,
    onSubmitReturnToTable,
  } = props;
  const [newContact, setNewContact] = useState(contactTemplate);

  const clearObj = (obj) => {
    let newObj = JSON.parse(JSON.stringify(obj));
    for (const key in newObj) {
      newObj[key] = "";
    }
    return newObj;
  };

  const onInputChange = (e) => {
    let input = JSON.parse(JSON.stringify(newContact));
    input[e.target.id] = e.target.value;
    setNewContact(input);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitAPIaction(newContact, contactTemplate.id ? contactTemplate.id : "");
    if (onSubmitReturnToTable) {
      onSubmitReturnToTable();
    } else {
      setNewContact(clearObj(newContact));
    }
    alert(`changes Submitted`);
  };
  const onClickCancel = () => {
    setNewContact(clearObj(newContact));
  };

  return (
    <form action="" id={id} className={id} onSubmit={(e) => onSubmit(e)}>
      {fields.map((input) => (
        <ContactFormInput
          id={input}
          onInputChange={onInputChange}
          value={newContact[input]}
          key={input}
        />
      ))}
      <button>Submit</button>
      {!contactTemplate.id ? (
        <button type="button" onClick={onClickCancel}>
          Cancel
        </button>
      ) : (
        ""
      )}
    </form>
  );
}
