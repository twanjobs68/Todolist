import React from 'react';

function ToDo({thingstodo}){
    return (
        <div class="todobox">
            <input type ="checkbox"/>
            texttDecoration: thingstodo.finshed ? "line-through" : null
            }}
            >
            {thingstodo.whattodo}
            </li>

        <button> Submit </button>
        </div>
    );
}

export default ToDo;