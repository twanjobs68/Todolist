import React, { Component } from 'react';
import addItem from './Components/Addnewitems';


class ToDoList extends Component {
    constructor() {
        super()

        this.state = {
            newItem: "",
            list: []
        }
    }
    render() {
        return (
            <div classname="add-button">
                Add Item here:
                <br />
                <input type="text" placeholder="Type item name: "
                    value={this.state.newItem}
                    onChange={e => this.updateToDo("newItem", e.target.value)}

                />
                <button onClick={() => this.addItem()}

                > Enter Item </button>
                {/*map over list of current items to keep track of items to delete */}
                <div className="delButton" >
                    <ul>
                        {this.state.list.map(item => {

                            {/* use unique key for each item to return*/ }
                            return (
                                <li key={item.id}>
                                    {item.value}

                                    {/* button will call delete item*/}
                                    <button
                                        onClick={() => this.deleteItem(item.id)}
                                    >
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ToDoList;