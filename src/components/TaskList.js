import React, { Component } from 'react'

export default class TaskList extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          { this.props.todos.map((todo, index) => {
            // return <li key={index}>{todo} <button onClick={this.handleDelete.bind(this, index)}>🗑</button></li>
            return <li key={index}>{todo} <button onClick={() => {this.props.delete(index)}}>🗑</button></li>
          })}
        </ul>
      </div>
    )
  }
}
