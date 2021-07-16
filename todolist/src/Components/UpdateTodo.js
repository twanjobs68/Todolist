import React from 'react';

function UpdateTodo(key, value) {
    return(
    //this will update React state so I want to have local storage invoked in project
    this.setState({
        [key]: value
      })
    )
 }
export default UpdateTodo;