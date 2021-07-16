import React from 'react';

function deleteItem(id) {
    return(
           //Update state Set state-set state which should now be equal to the updated list with deleted id
           this.setState({ list: updateList })
    

            //function that copies current item list array 
            const list = [...this.state.list]

        //find list item to delete
        //takes in item and returns item id if not equal to current id
        const updateList = list.filter(item => item.id !== id);

     
    )
}
   
    

export default deleteItem;