import { Button } from "react-bootstrap";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import React from "react";
import { CurrentUserProps } from "../Interfaces/CurrentUserProps";
import { UserListProps } from "../Interfaces/UserListProps";

export function SuperUserSelectButton({
    setUserType,
    setCurrentUser,
    userList
}: UserTypeProps & CurrentUserProps & UserListProps): JSX.Element {
    function changeToSuperUser() {
        setCurrentUser(userList[0]);
        setUserType("superUser");
    }
    return (
        <Button
            style={{ transform: "translateX(400px)" }}
            onClick={() => changeToSuperUser()}
        >
            superUser{" "}
        </Button>
    );
}

export function AdminSelectButton({
    setUserType,
    setCurrentUser,
    userList
}: UserTypeProps & CurrentUserProps & UserListProps): JSX.Element {
    function changeToAdmin() {
        setCurrentUser(userList[0]);
        setUserType("Admin");
    }
    return (
        <Button
            style={{ transform: "translateX(200px)" }}
            onClick={() => changeToAdmin()}
        >
            Admin
        </Button>
    );
}
