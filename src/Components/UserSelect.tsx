import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { User } from "./UserObject";

export function UserSelect(): JSX.Element {
    const [userList, setUserList] = useState<User[]>([]);
    const [newName, setNewName] = useState<string>("");
    function updateNewName(event: React.ChangeEvent<HTMLInputElement>) {
        setNewName(event.target.value);
    }
    function updateUserList(newName: string) {
        setUserList([...userList, { name: newName, list_of_items: [] }]);
        setNewName("");
    }
    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Name:</Form.Label>
                <Form.Control value={newName} onChange={updateNewName} />
            </Form.Group>
            <Button onClick={() => updateUserList(newName)}>Add User</Button>
            {userList.map((user: User) => (
                <div key={user.name}>{user.name}</div>
            ))}
        </div>
    );
}
