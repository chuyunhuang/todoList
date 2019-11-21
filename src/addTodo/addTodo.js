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
          <input className="input-field" id="todoInput" type="text" onChange={(e) => this.updateInput(e)} ></input>
          <button className="submit-btn" style={{ backgroundColor: "black", color: "#efff", borderRadius: " 10px", padding: "10px", margin: "5px" }} type="submit" >Add Todo</button>
        </form>
      </div >)
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