import React, { Component } from "react";

export default class ContactItem extends Component {
  render() {
    const { name, surname, phone, id, className, onClickRemoveLi } = this.props;
    return (
      <li className={className} id={id}>
        <span>{name}</span>
        <span>{surname}</span>
        <span>{phone}</span>
        <button onClick={() => onClickRemoveLi(id)}>delete</button>
      </li>
    );
  }
}
