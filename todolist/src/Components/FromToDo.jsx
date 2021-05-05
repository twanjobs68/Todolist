import React from 'react';
import ToDo from './Components/Todo';


{/*function to keep track of user input- function receives prop addToDo(destructure the addToDo function from props parament*/ }
{/*when user submits forms we want to add forms todo from the state to list of todos*/ }
function FromToDo(addToDo) {
  const [todo, setToDo] = useState({


    id: "taskcnt",
    task: "",
    finished: "false"

  });
  {/*above statements*/ }
  {/* state defined as todo and setToDo*/ }
  {/*task =describe to do ite*/ }
  {/*finished keeps track of item marked complete*/ }


  {/*the following function will handle when user types input for todo so I can track it in state. Will update task property*/ }
  {/*function takes in event as parameter. Function will update task property on todo object. SetTodo is called and passed new object that will be*/ }
  {/*updated with new target value which is new input todo from user*/ }
  function handleTaskInputChange(inputupdate) {
    setToDo({ todo, task: e.target.value });


    {/*function will take event from the DOM and execute when form is submitted*/ }

    function handleSubmit(e) {
      e.preventDefault();

      {/*If stgatement below will only get executed if the todo task is not empty and*/ }
      {/*  will call the TRIM function to get rid of whitespace from both sides of input-includes spaces*/ }
      {/* , carriage returns, line terminatiors*/ }
      {/*New addToDo function called with object of todo and updated ID property*/ }
      {/*ID property is......*/ }

      if (todo.task.trim()) {
        addToDo({ ...todo, id});

        {/*reset form with new object and updated task property*/ }
        setToDo({...todo, task: "" });
      }
    }

    {/*onChange will execute every time the new input value changes and input is set to todo task which is updated when handletaskchange is called*/ }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task"
            type="text"
            value={todo.taqsk}
            onChange={handleTaskInputChange} />
          <button type="submit" button />
        </form>

      </div>
    );
  }
}
  export default FromToDo;