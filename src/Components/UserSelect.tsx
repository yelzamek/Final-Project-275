import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function UserSelect(): JSX.Element {
    const [userType, setUserType] = useState<string>("superUser");
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
        </div>
    );
}
