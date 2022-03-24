import React, { Component } from "react";
import "./style.css";
import TodoItem from "./TodoItem/TodoItem";
import TodoInput from "./todoInput/TodoInput";

export default class TodoList extends Component {
  state = {
    todos: [
      {
        id: "14",
        title: "Сделать утреннюю зарядку",
        completed: true,
      },
      {
        id: "16",
        title: "Купить продукты",
        completed: false,
      },
      {
        id: "18",
        title: "Сделать домашнее задание",
        completed: false,
      },
      {
        id: "19",
        title: "Сходить в кино",
        completed: true,
      },
      {
        id: "20",
        title: "Позвонить другу",
        completed: false,
      },
    ],
  };
  constructor() {
    super();
    this.InputChange = this.InputChange.bind(this);
    this.RemoveLi = this.RemoveLi.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="js-TodoList">
        <h1>My plans</h1>
        <ul>
          {todos.map((el) => (
            <TodoItem
              text={el.title}
              key={el.id}
              id={el.id}
              className={el.completed ? "js-completed" : ""}
              arrLi={this.state.todos}
              RemoveLi={this.RemoveLi}
              value={this.state.newTodo}
            />
          ))}
        </ul>
        <TodoInput InputChange={this.InputChange} OnSubmit={this.OnSubmit} />
      </div>
    );
  }
  RemoveLi(id) {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  }
  InputChange(e) {
    this.setState({ newTodo: e.target.value });
  }
  OnSubmit(e) {
    e.preventDefault();
    let newTodo = {
      id: (
        Math.max.apply(
          0,
          this.state.todos.map((el) => +el.id)
        ) + 1
      ).toString(),
      title: this.state.newTodo,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
    this.setState({ newTodo: "" });
    e.target[0].value = "";
  }
}
