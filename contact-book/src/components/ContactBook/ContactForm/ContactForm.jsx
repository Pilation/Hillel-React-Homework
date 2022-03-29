import React, { Component } from "react";
import ContactFormInput from "./ContactFormInput/ContactFormInput";

export default class ContactForm extends Component {
  render() {
    const { onInputChange, values, onSubmit, onClickCancel } = this.props;
    return (
      <form action="" id="js-Contact-form" onSubmit={onSubmit}>
        {this.props.inputs.map((input) => (
          <ContactFormInput
            type={input}
            onInputChange={onInputChange}
            values={values}
            key={input}
          />
        ))}
        <div>
          <button>Submit</button>
          <button type="button" onClick={onClickCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
