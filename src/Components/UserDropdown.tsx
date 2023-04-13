import React from "react";
import { Form } from "react-bootstrap";

export interface userTypeProps {
    userType: string;
    setUserType: (newUserType: string) => void;
}

export function UserDropDown({
    userType,
    setUserType
}: userTypeProps): JSX.Element {
    function updateUserType(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserType(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="userEmotions">
                <Form.Label>Select your user</Form.Label>
                <Form.Select value={userType} onChange={updateUserType}>
                    <option value="superUser">superUser</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}
