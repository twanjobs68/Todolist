import React, { Component } from 'react';

class Todolist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    }
  }
  //
  updateInput(key, value) {
    //this will update React state so I ywant to have local storage invoked in project
    this.setState({
      [key]: value
    });
  }
  addItem() {
    //creates item with unique id to so I can identify each input item. calls math.random function to generate a random number
    //will use "slice" method to return newItem as an object in an array
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //current copy of list items and use the spread operator to add it on to the list
    const list = [...this.state.list];

    //add new itemm to the list.
    list.push(newItem);

    //update the state with list and  reset item input so text refreshes newitem input
    this.setState({
      list,
      newItem: ""
    });

  }
  deleteItem(id) {
    //function that copies current item list array 
    const list = [...this.state.list];
    //find list item to delete
    //takes in item and returns item id if not equal to current id
    const updateList = list.filter(item => item.id !== id);
    //Set state-set state which should now be equal to the updated list with deleted id
    this.setState({ list: updateList });
  }
  render() {
    return (
      <div className="App">
        <h1> To Do List</h1>
        <div className="container">
          Add Item Here
              <br />
          <input type="text" placeholder="Type item name: "
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}

          > Enter Item </button>
          <br /> <br />
          {/*map over list of current items to keep track of items to delete */}
          <div className="delButton" >
            <ul>
              {this.state.list.map(item => {


                return (
                  <li key={item.id}>
                    {item.value}
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
      </div>

    );
  }
}

export default Todolist;