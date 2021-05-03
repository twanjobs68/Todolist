import React, {useState} from "react";
import './App.css';

function App() {

  {/*State is an object used by react to determine when to render and how it will behave in the vittural dom*/}
  {/*attempting to use "useState".  This is a function that takes the initial value of defined "state" and returns 2 output items, the current state*/}
  {/* and a function that will be used to update the original state*/ }

  const[thingstodo, setThingsToDo] = useState([]);




  return (
    <div className="App">
<Toddo/>
    </div>
  );
}

export default App;
