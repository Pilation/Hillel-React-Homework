import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
export default function ContactItem(props) {
  const { contactData, fields, ApiDeleteAndUpdate, ApiPutAndUpdate } = props;
  const [editMode, setEditMode] = useState(false);
  const returnToTable = () => {
    setEditMode(!editMode);
  };

  return (
    <li>
      <button onClick={() => setEditMode(!editMode)}>
        {!editMode ? "Edit" : "Return"}
      </button>
      {!editMode ? (
        <div className={"js-ContactItem"}>
          {fields.map((field) => (
            <div key={field}>
              <span>{field}:</span>
              <span>{contactData[field]}</span>
            </div>
          ))}
          <button onClick={() => ApiDeleteAndUpdate(contactData.id)}>
            Delete
          </button>
        </div>
      ) : (
        <ContactForm
          className="js-ContactItem"
          id="js-ContactItem"
          fields={fields}
          contactTemplate={contactData}
          onSubmitAPIaction={ApiPutAndUpdate}
          onSubmitReturnToTable={returnToTable}
        />
      )}
    </li>
  );
}
