import React, { Component } from "react";

export default class TodoList extends Component {
  state = {};
  render() {
    const { InputChange, OnSubmit, value } = this.props;
    return (
      <form className="input" onSubmit={OnSubmit}>
        <input type="text" onChange={InputChange} value={value} />
        <button>add</button>
      </form>
    );
  }
}
