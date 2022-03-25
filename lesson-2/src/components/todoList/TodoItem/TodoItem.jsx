import React, { Component } from "react";
import "./style.css";

export default class TodoItem extends Component {
  render() {
    const { text, className, id, onClickRemoveLi } = this.props;
    return (
      <li className={className}>
        <span>{text}</span>
        <button type="button" onClick={() => onClickRemoveLi(id)}>
          delete
        </button>
      </li>
    );
  }
}
