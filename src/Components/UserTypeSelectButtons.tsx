import { Button, ChakraProvider } from "@chakra-ui/react";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import React from "react";
import { CurrentUserProps } from "../Interfaces/CurrentUserProps";
import { UserListProps } from "../Interfaces/UserListProps";

export function SuperUserSelectButton({
    setUserType,
    setCurrentUser,
    userList,
    userType
}: UserTypeProps & CurrentUserProps & UserListProps): JSX.Element {
    function changeToSuperUser() {
        setCurrentUser(userList[0]);
        setUserType("superUser");
    }
    return (
        <ChakraProvider>
            <Button
                colorScheme="green"
                variant={userType !== "superUser" ? "solid" : undefined}
                style={{ transform: "translateX(400px)" }}
                onClick={() => changeToSuperUser()}
            >
                Super User{" "}
            </Button>
        </ChakraProvider>
    );
}

export function AdminSelectButton({
    setUserType,
    setCurrentUser,
    userList,
    userType
}: UserTypeProps & CurrentUserProps & UserListProps): JSX.Element {
    function changeToAdmin() {
        setCurrentUser(userList[0]);
        setUserType("Admin");
    }
    return (
        <ChakraProvider>
            <Button
                colorScheme="green"
                variant={userType !== "Admin" ? "solid" : undefined}
                style={{ transform: "translateX(200px)" }}
                onClick={() => changeToAdmin()}
            >
                Admin
            </Button>
        </ChakraProvider>
    );
}
