import React from 'react';
import './App.css';
import TodoList from './todoList/todoList';
import TodoItem from './todoItem/todoItem';

class App extends React.Component {

  render() {
    return (
      <div> Hello
        <TodoList></TodoList>
        <TodoItem></TodoItem>
      </div>)
  }
}

export default App;
