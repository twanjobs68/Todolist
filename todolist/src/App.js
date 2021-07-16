import React, { Component } from 'react';
import './Components/Todolist';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Todolist />
        <Addnewitems />
        <UpdateTodo />
        <Deletetodo />
      </div>
    );
  }
}

export default App;