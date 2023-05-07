import { Button } from "react-bootstrap";
import { UserTypeProps } from "../Interfaces/userTypeProps";
import React from "react";
import { CurrentUserProps } from "../Interfaces/currentUserProps";
import { UserListProps } from "../Interfaces/userListProps";

export function SuperUserSelectButton({
    setUserType,
    setCurrentUser,
    userList
}: UserTypeProps & CurrentUserProps & UserListProps): JSX.Element {
    function changeToSuperUser() {
        setCurrentUser(userList[0]);
        setUserType("superUser");
    }
    return <Button onClick={() => changeToSuperUser()}>superUser</Button>;
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
    return <Button onClick={() => changeToAdmin()}>Admin</Button>;
}
