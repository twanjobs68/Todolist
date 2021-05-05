import React from 'react';
import Todo from './Todo';
{/*map over todo and return todo object as prop with unique key */}
function ToDoList({todo }) {
    return (
        <div>
            <ul>
                {todo.map(todo =>(
                    <Todo key ={todo.id} todo={todo}/>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;