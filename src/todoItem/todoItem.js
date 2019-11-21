import React from 'react';
import '../todoItem/todoItem.css';

class TodoItem extends React.Component {
  render() {
    const { todo } = this.props

    return (
      <div className="single-todo-item" onClick={this.toggleTodo} className={"todoItem" + (todo.completed ? " completed " : " ")}>{todo.text}</div>
    )
  }
  toggleTodo = () => {
    this.props.updateTodoFn(this.props.todo)
  }
}

export default TodoItem;
