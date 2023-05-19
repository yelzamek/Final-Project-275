/*import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
    SuperUserSelectButton,
    AdminSelectButton
} from "./UserTypeSelectButtons";
import { CurrentUserProps } from "../Interfaces/CurrentUserProps";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import { UserListProps } from "../Interfaces/UserListProps";

describe("UserTypeSelectButtons", () => {
    const userList = [
        { name: "Alice", userType: "superUser" },
        { name: "Bob", userType: "admin" },
        { name: "Charlie", userType: "user" }
    ];
    const setUserTypeMock = jest.fn();
    const setCurrentUserMock = jest.fn();
    const userTypeProps: UserTypeProps = {
        userType: "user",
        setUserType: setUserTypeMock
    };
    const currentUserProps: CurrentUserProps = {
        currentUser: userList[2],
        setCurrentUser: setCurrentUserMock
    };
    const userListProps: UserListProps = { userList: userList };

    describe("SuperUserSelectButton", () => {
        it("should call setUserType and setCurrentUser on click", () => {
            const { getByRole } = render(
                <SuperUserSelectButton
                    {...userTypeProps}
                    {...currentUserProps}
                    {...userListProps}
                />
            );
            fireEvent.click(getByRole("button"));
            expect(setUserTypeMock).toHaveBeenCalledWith("superUser");
            expect(setCurrentUserMock).toHaveBeenCalledWith(userList[0]);
        });
    });

    describe("AdminSelectButton", () => {
        it("should call setUserType and setCurrentUser on click", () => {
            const { getByRole } = render(
                <AdminSelectButton
                    {...userTypeProps}
                    {...currentUserProps}
                    {...userListProps}
                />
            );
            fireEvent.click(getByRole("button"));
            expect(setUserTypeMock).toHaveBeenCalledWith("Admin");
            expect(setCurrentUserMock).toHaveBeenCalledWith(userList[0]);
        });
    });
});*/

export {};
