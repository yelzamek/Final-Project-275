import { Button } from "react-bootstrap";
import React, { useState } from "react";
//import { currentUserProps } from "../Interfaces/currentUserProps";
//import { Ingredient } from "../Interfaces/IngredientObject";

export function addToUserList() {
    //So when current user is passed to here we can update current user with the new item but we also have to updtae the user in user list
    //with that new item or else When we switch users the state wont save and we will have the probelem that other group had
    //We could also Just update the one in the list and then make sure current user changes aswell to that updated user because they are not
    //linked and I dont think van even be linked.
    //As of now this component is useless because waiting on drag and drop
    const [counter, setCounter] = useState<number>(0);
    function addItem() {
        setCounter(counter + 1);
    }
    <Button onClick={() => addItem()}>Add Item</Button>;
}
