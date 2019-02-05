import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  state = {
    newtodoContent: ""
  };

  handleUserInput = e => {
    this.setState({
      newtodoContent: e.target.value
    });
  };

  writeTodo = () => {
    this.setState({ newtodoContent: "" });
  };
  render() {
    return (
      <input
        type="text"
        className="input"
        placeholder="What needs to be done? "
        value={this.state.newtodoContent}
        onChange={this.handleUserInput}
        onClick={this.writeTodo}
        addTodo={this.state.newtodoContent}
      />
    );
  }
}

export default Input;
