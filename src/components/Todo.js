import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.todoContent}</h1>
      </div>
    );
  }
}
