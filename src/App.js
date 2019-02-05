import React, { Component } from "react";
import Todo from "./components/Todo";
import Input from "./components/Input";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, todoContent: "1st Todo" },
      { id: 2, todoContent: "2nd Todo" },
      { id: 2, todoContent: "2nd Todo" }
    ]
  };

  addTodo = todo => {
    const previousTodo = this.state.todos;
    previousTodo.push({ id: previousTodo.length + 1, todoContent: todo });
    this.setState({
      todos: previousTodo
    });
  };

  render() {
    return (
      <Container className="App">
        <Row>
          <h1>React-Firebase Todo</h1>
        </Row>

        <Row>
          <Input addtodo={this.addTodo} />
        </Row>

        <Row>
          {this.state.todos.map(todo => (
            <Todo
              key={todo.id}
              todoId={todo.id}
              todoContent={todo.todoContent}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default App;
