import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    const { onInputChange, onSubmitAddLi, value } = this.props;
    return (
      <form className="input" onSubmit={onSubmitAddLi}>
        <input type="text" onChange={onInputChange} value={value} />
        <button>add</button>
      </form>
    );
  }
}
