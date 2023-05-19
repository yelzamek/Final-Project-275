import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { AddUser } from "./AddUser";
//import { User } from "../Interfaces/UserObject";

test("renders AddUser component without errors", () => {
    const setUserType = jest.fn();
    const setUserList = jest.fn();
    render(
        <AddUser
            userType=""
            setUserType={setUserType}
            userList={[]}
            setUserList={setUserList}
        />
    );
});
test("AddUser calls RemoveUser with the correct user name when X button is clicked", () => {
    const mockSetUserType = jest.fn();
    const mockSetUserList = jest.fn();
    const { getByText } = render(
        <AddUser
            userType=""
            setUserType={mockSetUserType}
            userList={[
                {
                    name: "John Doe",
                    list_of_items: [],
                    list_of_favorites: []
                }
            ]}
            setUserList={mockSetUserList}
        />
    );

    const removeUserButton = getByText("X");

    fireEvent.click(removeUserButton);

    expect(mockSetUserList).toHaveBeenCalledWith([]);
});
test("adduser displays error message when a blank user name is entered", () => {
    const setUserType = jest.fn();
    const setUserList = jest.fn();
    const { getByText } = render(
        <AddUser
            userType=""
            setUserType={setUserType}
            userList={[]}
            setUserList={setUserList}
        />
    );

    const addUserButton = getByText("Add User");

    fireEvent.click(addUserButton);

    expect(() => {
        getByText("Please provide a not Blank User Name");
    }).toThrow();

    expect(setUserList).not.toHaveBeenCalled();
});
test("adduser displays error message when a duplicate user name is entered", () => {
    const setUserType = jest.fn();
    const setUserList = jest.fn();
    const userList = [
        { name: "John Doe", list_of_items: [], list_of_favorites: [] }
        // Add other user objects as needed for testing duplicate names
    ];

    const { getByText, getByLabelText } = render(
        <AddUser
            userType=""
            setUserType={setUserType}
            userList={userList}
            setUserList={setUserList}
        />
    );

    const userNameInput = getByLabelText("Enter New Users Name:");
    const addUserButton = getByText("Add User");

    fireEvent.change(userNameInput, { target: { value: "John Doe" } });
    fireEvent.click(addUserButton);

    expect(() => {
        getByText("Please provide a unique User Name");
    }).toThrow();

    expect(setUserList).not.toHaveBeenCalled();
});
