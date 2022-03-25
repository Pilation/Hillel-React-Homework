import React, { Component } from "react";
import "./style.css";
// import TodoItem from "./TodoItem/TodoItem";
// import TodoInput from "./todoInput/TodoInput";
import ContactList from "./Contact-list/ContactList";
import ContactForm from "./Contact-form/ContactForm";

export default class ContactBook extends Component {
  state = {
    //
  };
  constructor() {
    super();
    //     this.InputChange = this.InputChange.bind(this);
    this.RemoveLi = this.RemoveLi.bind(this);
    this.InputChange = this.InputChange.bind(this);
    //     this.OnSubmit = this.OnSubmit.bind(this);
  }
  componentDidMount() {
    // console.log("TODO LIST DID MOUNT");
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/contacts")
      .then((resp) => resp.json())
      .then((data) => this.setState({ contacts: data }));
  }

  render() {
    // console.log(this.state.contacts);
    return (
      <div className="js-ContactBook">
        <h1>Contact-book</h1>
        <ContactList RemoveLi={this.RemoveLi} contacts={this.state.contacts} />
        <h2>Contact-form</h2>
        <ContactForm InputChange={this.InputChange} />
      </div>
    );
  }
  UploadStateFromAPI() {
    // console.log(this.state.contacts);
  }
  RemoveLi(id) {
    const updatedState = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({ contacts: updatedState });
  }
  InputChange(e) {
    this.setState({ [e.target.id]: e.target.value });
    e.target.value = this.state[e.target.id];
    console.log(e.target.value);
    // console.dir(e.target);
    // console.log(this.state);
  }
  Submit(e) {
    //   e.preventDefault();
    //   let newTodo = {
    //     id: (
    //       Math.max.apply(
    //         0,
    //         this.state.todos.map((el) => +el.id)
    //       ) + 1
    //     ).toString(),
    //     title: this.state.newTodo,
    //     completed: false,
  }
  //     this.setState({ todos: [...this.state.todos, newTodo] });
  //     this.setState({ newTodo: "" });
  //     e.target[0].value = "";
  //   }
}
