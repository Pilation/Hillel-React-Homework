import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Button from "../../common/Button/Button";
export default function ContactItem(props) {
  const { contactData, fields, ApiDeleteAndUpdate, ApiPutAndUpdate } = props;
  const [editMode, setEditMode] = useState(false);
  const returnToTable = () => {
    setEditMode(!editMode);
  };

  return (
    <li>
      <Button
        onClick={() => setEditMode(!editMode)}
        value={!editMode ? "Edit" : "Return"}
      ></Button>
      {!editMode ? (
        <div className={"js-ContactItem"}>
          {fields.map((field) => (
            <div key={field}>
              <span>{field}:</span>
              <span>{contactData[field]}</span>
            </div>
          ))}
          <Button
            onClick={() => ApiDeleteAndUpdate(contactData.id)}
            value="Delete"
          ></Button>
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
