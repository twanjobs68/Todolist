import React from 'react';

{/*check box, list with todo task and delete button elements*/}
{/* display flex to align todo items horizontally}*/}
{/*list items will get textDecoration property of line through if boolean finished is trye*/}
function ToDo({todo}){
    return (
        <div style={{display: "flex"}}>
        <input type="checkbox" />
            <li style={{
                color: "green",
                texttDecoration: todo.finshed ? "line-through" : null
              }} >
                {todo.task}
            </li>

              <button type= "submit"> Submit </button>

        </div>
    );
}

 export default ToDo;