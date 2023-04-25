import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Container, Row, Col } from "react-bootstrap";

export function AddToCenterList(): JSX.Element {
    const [name, setName] = useState<string>("");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function addItemToCenterList() {
        return 1;
    }
    return (
        <div>
            <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
            <div>
                <Button onClick={addItemToCenterList}>
                    Add To Center List
                </Button>
            </div>
        </div>
    );
}
