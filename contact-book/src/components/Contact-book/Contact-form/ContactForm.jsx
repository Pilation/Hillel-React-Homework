import React, { Component } from "react";
// import "./style.css";
// import TodoItem from "./TodoItem/TodoItem";
// import TodoInput from "./todoInput/TodoInput";

export default class ContactForm extends Component {
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
    const { InputChange } = this.props;
    return (
      <form action="" id="js-Contact-form">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={InputChange} />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname" onChange={InputChange} />
        </div>
        <div>
          <label htmlFor="tel">Phone</label>
          <input type="tel" id="tel" onChange={InputChange} />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}
