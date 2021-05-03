import React, {useState} from "react";
import './App.css';
import FromToDo from './Components/FromToDo';

function App() {

  {/*State is an object used by react to determine when to render and how it will behave in the vittural dom*/}
  {/*attempting to use "useState".  This is a function that takes the initial value of defined "state" and returns 2 output items, the current state*/}
  {/* and a function that will be used to update the original state*/ }

  const[thingstodo, setThingsToDo] = useState([]);

  function getToDo(thingsToDo){

    setThingsToDo([thingsToDo,thingsToDo]);
  }


  return (
    <div className="App">
      {/*the below code addition to ToDo component will pass the function getToDo to the ToDo component*/}
      <FromToDo getToDo={getToDo}/>
    </div>
  );
}

export default App;
