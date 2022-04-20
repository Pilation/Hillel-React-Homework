import { useState } from "react";
import ContactFormInput from "./ContactFormInput";
import Button from "../../common/Button/Button";

export default function ContactForm(props) {
  const {
    onSubmitAPIaction,
    id,
    fields,
    contactTemplate,
    onSubmitReturnToTable,
    className,
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
    onSubmitAPIaction(newContact);
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
    <form action="" id={id} className={className} onSubmit={(e) => onSubmit(e)}>
      {fields.map((input) => (
        <ContactFormInput
          id={input}
          onInputChange={onInputChange}
          value={newContact[input]}
          key={input}
        />
      ))}
      <Button value="Submit" />
      {!contactTemplate.id ? (
        <Button onClick={onClickCancel} value="Cancel" />
      ) : (
        ""
      )}
    </form>
  );
}
