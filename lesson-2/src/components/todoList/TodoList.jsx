import React, { Component } from "react";
import "./style.css";
import TodoItem from "./TodoItem/TodoItem";
import TodoInput from "./TodoInput/TodoInput";

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

    translation: {
      names: [0, 1, 2, { com1: 1, com2: 2, com3: 3 }],
    },
  };
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onClickRemoveLi = this.onClickRemoveLi.bind(this);
    this.onSubmitAddLi = this.onSubmitAddLi.bind(this);
  }
  componentDidMount() {
    // this.setState(translation: );
    // console.log({ ...this.state.translation });
    const newTranslation = { ...this.state.translation };
    newTranslation.names[3].com1 = "huy";
    this.setState({ translation: newTranslation });
  }
  render() {
    const { todos } = this.state;

    console.log(this.state);

    // console.log(this.state.translation?.names[3].com1);
    // translation?.names[3].com1

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
              onClickRemoveLi={this.onClickRemoveLi}
              value={this.state.newTodo}
            />
          ))}
        </ul>
        <TodoInput
          onInputChange={this.onInputChange}
          onSubmitAddLi={this.onSubmitAddLi}
        />
      </div>
    );
  }
  onClickRemoveLi(id) {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  }
  onInputChange(e) {
    this.setState({ newTodo: e.target.value });
  }
  onSubmitAddLi(e) {
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
