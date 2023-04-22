import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { User } from "./UserObject";

export function UserSelect(): JSX.Element {
    const [userType, setUserType] = useState<string>("superUser");
    const blank_User: User = { name: "Test", list_of_items: [] };
    const [userList, setUserList] = useState<User[]>([]);
    const [newName, setNewName] = useState<string>("");
    function updateNewName(event: React.ChangeEvent<HTMLInputElement>) {
        setNewName(event.target.value);
    }
    function updateUserList(newName: string) {
        setUserList([...userList, { name: newName, list_of_items: [] }]);
        setNewName("");
    }
    function updateUserType(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserType(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="userEmotions">
                <Form.Label>How do you feel?</Form.Label>
                <Form.Select value={userType} onChange={updateUserType}>
                    <option value="superUser">superUser</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </Form.Select>
            </Form.Group>
            The user is {userType}.
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
