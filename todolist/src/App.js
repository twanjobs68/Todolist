import React, { useState } from "react";
import './App.css';
import FromToDo from './Components/Fromtodo';
import ToDoList from './Components/Todolist';
import ToDo from  './Components/Todo'

function App() {

  {/*State is an object used by react to determine when to render and how it will behave in the vittural dom*/ }
  {/*attempting to use "useState".  This is a function that takes the initial value of defined "state" and returns 2 output items, the current state*/ }
  {/* and a function that will be used to update the original state*/ }

  const [todo, setToDo] = useState([]);

  {/*function will add new input to todo */ }
  {/*settodo function will have array passed with new todo that will go over old todo*/ }
  function addToDo(todo) {

    setToDo([todo, ...todo]);
  }


  return (
    <div className="App">
      {/*the below code addition to ToDo component will pass the function getToDo to the ToDo component*/}
      <Todo />
      <Fromtodo addToDo={addToDo}/>
      <Todolist todo={todo}/>
      {/*props only flow in one direction...top down*/}
      {/*Parent components can only pass props to child components and child components can only receive props from parent components}
      {/*above fromToDo is being passed new addToDo function as a prop}
    {/*may need to change to f<FromToDo addToDo={todo*/}
        </div>
  );

}

export default App;
