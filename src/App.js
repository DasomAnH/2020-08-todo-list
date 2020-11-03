import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newTodoText: '',
      todos: [
        'Description',
        'Another Todo',
        'Another another Todo',
        'A third really long todo with a name that is too long to fit on one line and has a reallybigwordincludedalso'
      ]
    }
  }

  handleChange = (e) => {
    this.setState({ newTodoText: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // alert(`new todo: ${this.state.newTodoText}`);
    // // option 1: spread and push new item
    // let newTodos = [...this.state.todos];
    // newTodos.push(this.state.newTodoText);
    // this.setState({
    //   todos: newTodos
    // })

    // option 2: concat
    this.setState({
      todos: this.state.todos.concat(this.state.newTodoText),
      newTodoText: ''
    })
  }

  handleDelete = (indexOfItemToDelete) => {
    // // option 1: splice array
    // // create a copy of todos from state
    // let newTodos = [...this.state.todos];
    // // remove item based on index provided
    // newTodos.splice(indexOfItemToDelete, 1);
    // // update state with new todos after item has been removed
    // this.setState({
    //   todos: newTodos
    // })

    // option 2: filter
    let newTodos = this.state.todos.filter((todo, index) => index !== indexOfItemToDelete)
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Add Task</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Todo Item:
            <input type="text" value={this.state.newTodoText} onChange={this.handleChange} />
          </label>
          <button type="submit">Add Item</button>
        </form>
        <TaskList title="My Tasks" todos={this.state.todos} delete={this.handleDelete} />
        <TaskList title="Complete Tasks" todos={this.state.todos} delete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
