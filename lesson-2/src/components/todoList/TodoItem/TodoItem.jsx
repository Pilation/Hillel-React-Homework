import React, { Component } from "react";
import "./style.css";

export default class TodoItem extends Component {
  state = {};
  render() {
    const { text, className, id, RemoveLi } = this.props;
    return (
      <li className={className} id={id}>
        <span>{text}</span>
        <button type="button" onClick={() => RemoveLi(id)}>
          delete
        </button>
      </li>
    );
  }
}
