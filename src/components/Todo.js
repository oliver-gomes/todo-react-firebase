import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  render() {
    return (
      <div className="todo-container">
        <h2>{this.props.todoContent}</h2>
      </div>
    );
  }
}
