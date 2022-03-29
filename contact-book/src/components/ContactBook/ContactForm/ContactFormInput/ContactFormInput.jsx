import React, { Component } from "react";

export default class ContactFormInput extends Component {
  render() {
    const { onInputChange, values, type } = this.props;
    return (
      <div>
        <label htmlFor={type}>{type}</label>
        <input
          type={type == `phone` ? `tel` : `text`}
          id={type}
          onChange={onInputChange}
          value={values[type]}
        />
      </div>
    );
  }
}
