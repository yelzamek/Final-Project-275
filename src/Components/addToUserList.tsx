import { Button } from "react-bootstrap";
import React, { useState } from "react";

export function addToUserList() {
    const [counter, setCounter] = useState<number>(0);
    function addItem() {
        setCounter(counter + 1);
    }
    <Button onClick={() => addItem()}>Add Item</Button>;
}
