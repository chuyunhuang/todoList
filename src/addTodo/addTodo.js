import React from 'react';

class AddTodo extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: ''
    }
  }

  render() {
    return (
      <div className="input-form-container">
        <form onSubmit={(e) => this.submitTodo(e)}>
          <input id="todoInput" type="text" onChange={(e) => this.updateInput(e)} ></input>
          <button type="submit" >Add Todo</button>
        </form>
      </div>)
  }

  updateInput = (e) => {
    this.setState({ todo: e.target.value })
  }

  submitTodo = (e) => {
    e.preventDefault()
    console.log('submit', this.state)
    this.props.addTodoFn(this.state.todo)
    document.getElementById('todoInput').value = ''
  }
}

export default AddTodo;