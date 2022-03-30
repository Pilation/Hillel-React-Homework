import React, { Component } from "react";
import "./style.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactTable from "./ContactTable/ContactTable";

export default class ContactBook extends Component {
  state = {
    newContact: {},
    inputs: [],
  };
  constructor() {
    super();
    this.onClickRemoveLi = this.onClickRemoveLi.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickCancel = this.onClickCancel.bind(this);
    this.contactsBase = `https://61eeb627d593d20017dbb0b4.mockapi.io/contacts`;
    this.updateStateFromAPI = this.updateStateFromAPI.bind(this);
    this.changesToAPI = this.changesToAPI.bind(this);
    this.clearObj = this.clearObj.bind(this);
  }
  componentDidMount() {
    this.updateStateFromAPI(this.contactsBase);
  }

  render() {
    return (
      <div className="js-ContactBook">
        <h1>Contact-book</h1>
        <ContactTable
          onClickRemoveLi={this.onClickRemoveLi}
          contacts={this.state.contacts}
        />
        <h2>Contact-form</h2>
        <ContactForm
          onInputChange={this.onInputChange}
          inputs={this.state.inputs}
          values={this.state.newContact}
          onSubmit={this.onSubmit}
          onClickCancel={this.onClickCancel}
        />
      </div>
    );
  }

  onClickRemoveLi(id) {
    this.changesToAPI(this.contactsBase + `/` + id, "DELETE");
  }
  onInputChange(e) {
    let input = JSON.parse(JSON.stringify(this.state.newContact));
    input[e.target.id] = e.target.value;
    this.setState({
      newContact: input,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.changesToAPI(this.contactsBase, "POST", this.state.newContact);
    this.setState({
      newContact: this.clearObj(this.state.newContact),
    });
  }
  onClickCancel() {
    this.setState({
      newContact: this.clearObj(this.state.newContact),
    });
  }
  clearObj(obj) {
    let newObj = JSON.parse(JSON.stringify(obj));
    for (const key in newObj) {
      newObj[key] = "";
    }
    return newObj;
  }
  changesToAPI(URL, method = "GET", obj) {
    let options = {
      method: method,
      headers: {
        "Content-type": "application/json",
      },
    };
    if (obj) {
      options.body = JSON.stringify(obj);
    }
    fetch(URL, options)
      .then((resp) => resp.json())
      .then(() => this.updateStateFromAPI(this.contactsBase));
  }

  updateStateFromAPI(URL) {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => this.setState({ contacts: data }))
      .then(() => {
        const newContactObj = {},
          inputsArr = [];
        for (const key in this.state.contacts[0]) {
          if (key !== `id`) {
            newContactObj[key] = ``;
            inputsArr.push(key);
          }
        }
        this.setState({
          newContact: newContactObj,
          inputs: inputsArr,
        });
      });
  }
}
