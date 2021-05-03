import React from 'react';

function FormToDo(getToDo) {
    const[thingstodo, setThingsToDo] = useState({

    
      numTask: "",
      finished: "false",
      whatToDo: ""
    });

    {/*the following function of  will take care of when user types in todo so we can traqck it in state. Will update todo*/}
    {/*parameter is the event of inputupdate and will be used to update old value of state*/}
    function takeCareofInputUpdate(inputupdate){
        setThingsToDo({thingstodo,whatToDo:inputupdate.target.value});

    }
    
    {/*when userinput submits form add forms todo from state to list of Todo's*/}

    functionhandleSubmit(thingsToDo)(
        thingsToDo.preventDefault();
    )

    return (
        <div>
            <form>
                <input name="task"
                type="text"
                value={thingstodo.whatToDo}/>
                <button> </button>
            </form>
            
        </div>
    );
}

export default FromToDo;