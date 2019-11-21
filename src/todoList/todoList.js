import React from 'react';
import TodoItem from '../todoItem/todoItem';

class TodoList extends React.Component {
  render() {
    const { todo } = this.props
    return (
      <div className="toDoList-Container">
        {
          todo.map((item, index) => {
            return (
              <TodoItem updateTodoFn={this.updateTodo} key={index} todo={item}></TodoItem>
            )
          })
        }
      </div>
    )
  }
  updateTodo = (todo) => {
    this.props.updateTodoFn(todo)
  }
}

export default TodoList;

