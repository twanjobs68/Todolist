import React from 'react';

function FormToDo(getToDo) {
    const[thingstodo, setThingsToDo] = useState({

    
      
      finished: "false",
      whatToDo: ""
    });

    {/*the following function of  will take care of when user types in todo so we can traqck it in state. Will update todo*/}
    {/*parameter is the event of inputupdate and will be used to update old value of state*/}
    function takeCareofInputUpdate(inputupdate) {
        setThingsToDo({thingstodo,whatToDo:inputupdate.target.value});

    }
    
    {/*when userinput submits form add forms todo from state to list of Todo's*/}

    function handleSubmit(inputupdate){
       inputupdate.preventDefault();
       {/*if statement will use TRIM function to get rid of whitespace from both sides of input-includes spaces, tabs*/}
     {/* , carriage returns, line terminatiors*/}
       if(thingstodo.whatToDo.trim()){
             getToDo({thingsToDo});
          {/*reset thingToDo*/}
        setThingsToDo({thingsToDo,whatToDo: ""});
       }
    )

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="task"
                type="text"
                value={thingstodo.whatToDo}
                onChange={takeCareofInputUpdate}/>
                <button type ="submit" button />
            </form>
            
        </div>
    );
}

export default FormToDo;