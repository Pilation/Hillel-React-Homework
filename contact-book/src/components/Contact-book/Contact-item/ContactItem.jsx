import React, { Component } from "react";
// import "./style.css";
// import TodoItem from "./TodoItem/TodoItem";
// import TodoInput from "./todoInput/TodoInput";

export default class ContactItem extends Component {
  state = {
    //
  };
  constructor() {
    super();
    //     this.InputChange = this.InputChange.bind(this);
    //     this.RemoveLi = this.RemoveLi.bind(this);
    //     this.OnSubmit = this.OnSubmit.bind(this);
  }
  render() {
    const { name, surname, phone, id, className, RemoveLi } = this.props;
    return (
      <li className={className} id={id}>
        <span>{name}</span>
        <span>{surname}</span>
        <span>{phone}</span>
        <button onClick={() => RemoveLi(id)}>delete</button>
      </li>
    );
  }
}
