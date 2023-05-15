import { Button } from "react-bootstrap";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import React from "react";
import { CurrentUserProps } from "../Interfaces/CurrentUserProps";
import { UserListProps } from "../Interfaces/UserListProps";
import { FilterChoicesProps } from "../Interfaces/FilterChoices";

export function SuperUserSelectButton({
    setUserType,
    setCurrentUser,
    userList,
    filterChoices,
    setFilterChoices
}: UserTypeProps &
    CurrentUserProps &
    UserListProps &
    FilterChoicesProps): JSX.Element {
    function changeToSuperUser() {
        setCurrentUser(userList[0]);
        setUserType("superUser");
        if (filterChoices.includes("Favorites")) {
            const copy = [...filterChoices];
            const index = filterChoices.indexOf("Favorites");
            copy.splice(index, 1);
            setFilterChoices(copy);
        }
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
    userList,
    filterChoices,
    setFilterChoices
}: UserTypeProps &
    CurrentUserProps &
    UserListProps &
    FilterChoicesProps): JSX.Element {
    function changeToAdmin() {
        setCurrentUser(userList[0]);
        setUserType("Admin");
        if (filterChoices.includes("Favorites")) {
            const copy = [...filterChoices];
            const index = filterChoices.indexOf("Favorites");
            copy.splice(index, 1);
            setFilterChoices(copy);
        }
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
