import React from 'react';

class TodoList extends React.Component {
  render() {
    const { todo } = this.props
    return (
      <div className="toDoList-Container">
        {
          todo.map((item, index) => {
            return (
              <div key={index}>{item}</div>
            )
          })
        }
      </div>
    )
  }
}

export default TodoList;

