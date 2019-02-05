import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  state = {
    newtodoContent: ""
  };

  handleUserInput = e => {
    console.log(e.target.value);
    this.setState({
      newtodoContent: e.target.value
    });
  };

  writeTodo = e => {
    e.preventDefault();
    this.props.addtodo(this.state.newtodoContent);
    this.setState({ newtodoContent: "" });
  };

  render() {
    return (
      <React.Fragment>
        <form action="" onSubmit={this.writeTodo}>
          <input
            type="text"
            className="input"
            placeholder="What needs to be done? "
            value={this.state.newtodoContent}
            onChange={this.handleUserInput}
            // o={this.writeTodo}
            addtodo={this.state.newtodoContent}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default Input;
