import React from 'react';
import './App.css';
import TodoList from './todoList/todoList';
import AddTodo from './addTodo/addTodo';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  render() {
    return (
      <div className="body">
        <AddTodo addTodoFn={this.addTodo}></AddTodo>
        <TodoList updateTodoFn={this.updateTodo} todo={this.state.todos}></TodoList>
      </div>)
  }

  componentDidMount() {
    const todos = localStorage.getItem('todos')
    if (todos) {
      const savedTodos = JSON.parse(todos)
      this.setState({ todos: savedTodos })
    } else {
      console.log('no todos')
    }
  }

  addTodo = async (todo) => {
    await this.setState({
      todos: [...this.state.todos, {
        text: todo,
        completed: false
      }]
    })
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
    console.log(localStorage.getItem('todos'))

  }

  updateTodo = async (todo) => {
    const newTodo = this.state.todos.map((item) => {
      if (todo === item) {
        return {
          text: todo.text,
          completed: !todo.completed
        }
      } else return item
    })
    await this.setState({ todos: newTodo });
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }
}

export default App;
