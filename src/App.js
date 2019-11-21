import React from 'react';
import './App.css';
import TodoList from './todoList/todoList';
import TodoItem from './todoItem/todoItem';
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
      <div> Hello
        <AddTodo addTodoFn={this.addTodo}></AddTodo>
        <TodoList todo={this.state.todos}></TodoList>
        <TodoItem></TodoItem>
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
    await this.setState({ todos: [...this.state.todos, todo] })
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
    console.log(localStorage.getItem('todos'))

  }
}

export default App;
