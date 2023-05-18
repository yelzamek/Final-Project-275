/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { User } from "../Interfaces/UserObject";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import { UserListProps } from "../Interfaces/UserListProps";
export function AddUser({
    userType,
    userList,
    setUserList
}: UserListProps & UserTypeProps): JSX.Element {
    const [newName, setNewName] = useState<string>("Type New User Name Here");
    const [working, setWorking] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [errorBlank, setErrorBlank] = useState<boolean>(false);
    function displayError(ErrorType: string) {
        setWorking(false);
        setNewName("Type New User Name Here");
        ErrorType === "alreadyInList" ? setError(true) : setErrorBlank(true);
    }
    function updateNewName(event: React.ChangeEvent<HTMLInputElement>) {
        working ? setNewName(event.target.value) : undefined;
    }
    function startWorkingHelper() {
        setNewName("");
        setWorking(true);
        setError(false);
        setErrorBlank(false);
    }
    function startWorking() {
        working ? undefined : startWorkingHelper();
    }
    function updateUserListHelper(newName: string) {
        setUserList([
            ...userList.map(
                (user: User): User => ({
                    name: user.name,
                    list_of_items: [...user.list_of_items],
                    list_of_favorites: [...user.list_of_favorites]
                })
            ),
            { name: newName, list_of_items: [], list_of_favorites: [] }
        ]);
        setWorking(false);
        setNewName("Type New User Name Here");
    }
    function updateUserList(newName: string) {
        if (working) {
            const alreadyInList: boolean = userList.some(
                (user: User): boolean => user.name === newName
            );
            const isBlank: boolean = newName.trim().length === 0;
            const ErrorType: string = isBlank ? "blank" : "alreadyInList";
            alreadyInList || isBlank
                ? displayError(ErrorType)
                : updateUserListHelper(newName);
        }
    }
    return (
        <div
            style={{
                display: userType === "superUser" ? "inLine-block" : "none",
                top: 175,
                position: "absolute",
                marginLeft: -150
            }}
        >
            {error && (
                <div style={{ color: "red", fontWeight: "bold" }}>
                    Please provide a unique User Name
                </div>
            )}
            {errorBlank && (
                <div style={{ color: "red", fontWeight: "bold" }}>
                    Please provide a not Blank User Name
                </div>
            )}
            <Form.Group
                controlId="formCheckAnswer"
                onClick={() => startWorking()}
            >
                <Form.Label>Enter New Users Name:</Form.Label>
                <Form.Control
                    style={{
                        width: "300px",
                        color: working ? "black" : "lightgray",
                        fontWeight: working ? "normal" : "bold"
                    }}
                    value={newName}
                    onChange={updateNewName}
                />
            </Form.Group>
            <Button onClick={() => updateUserList(newName)}>Add User</Button>
            {userList.map((user: User) => (
                <div key={user.name}>{user.name}</div>
            ))}
        </div>
    );
}
