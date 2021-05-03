import React from 'react';
import ToDo from './Todo';

function ToDoList({ thingsToDo }) {
    return (
        <div>
            <ul>
                {thingsToDo.map(thingstodo =>(
                    <thingsToDo key ={thingstodo =thingstodo}
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;