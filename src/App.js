import React, { Component } from "react";
import Todo from "./components/Todo";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, todoContent: "1st Todo" },
      { id: 2, todoContent: "2nd Todo" }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>React-Firebase Todo</h1>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} todoContent={todo.todoContent} />
        ))}
      </div>
    );
  }
}

export default App;
