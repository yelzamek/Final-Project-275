import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function AddToCenterList(): JSX.Element {
    const [name, setName] = useState<string>("");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
            <div>
                <Button onClick={addItemToCenterList}>gain</Button>
            </div>
        </div>
    );
}
