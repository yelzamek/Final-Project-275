/*import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { UserSelect } from "./AddUser";

describe("UserSelect", () => {
    const userList = [
        { name: "User 1", list_of_items: [] },
        { name: "User 2", list_of_items: [] }
    ];
    const setUserList = jest.fn();
    const userType = "superUser";

    it("renders without crashing", () => {
        render(
            <UserSelect
                userType={userType}
                userList={userList}
                setUserList={setUserList}
                setUserType={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });

    it("updates the new user name when the input value changes", () => {
        const { getByLabelText } = render(
            <UserSelect
                userType={userType}
                userList={userList}
                setUserList={setUserList}
                setUserType={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const input = getByLabelText("Enter New Users Name:");
        fireEvent.change(input, { target: { value: "New User" } });
        expect(input.appendChild).toBe("New User");
    });

    it("adds a new user to the list when the Add User button is clicked", () => {
        const { getByText } = render(
            <UserSelect
                userType={userType}
                userList={userList}
                setUserList={setUserList}
                setUserType={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const input = getByText("Add User");
        fireEvent.click(input);
        expect(setUserList).toHaveBeenCalledTimes(1);
        expect(setUserList).toHaveBeenCalledWith([
            ...userList,
            { name: "", list_of_items: [] }
        ]);
    });
});
*/
export {};
