/*import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { UserDropDown } from "./UserDropdown";
import { User } from "../Interfaces/UserObject";

const userList = [
    {
        name: "Alice",
        list_of_items: [
            { name: "meal1", calories: 100 },
            { name: "meal2", calories: 200 }
        ]
    },
    {
        name: "Bob",
        list_of_items: [
            { name: "meal3", calories: 300 },
            { name: "meal4", calories: 400 }
        ]
    }
];

const currentUser = {
    name: "Alice",
    list_of_items: [
        { name: "meal1", calories: 100 },
        { name: "meal2", calories: 200 }
    ]
};

const props = {
    setUserType: jest.fn(),
    userList: userList,
    currentUser: currentUser,
    setCurrentUser: jest.fn()
};

describe("UserDropdown", () => {
    it("should render without error", () => {
        render(
            <UserDropDown
                userType={""}
                setUserList={function (newUserList: User[]): void {
                    throw new Error("Function not implemented.");
                }}
                {...props}
            />
        );
        expect(screen.getByLabelText("Select your user")).toBeInTheDocument();
    });

    it("should call setUserType with 'superUser' when 'None' is selected", () => {
        render(<UserDropDown {...props} />);
        fireEvent.change(screen.getByRole("combobox"), {
            target: { value: "None" }
        });
        expect(props.setUserType).toHaveBeenCalledWith("superUser");
    });

    it("should call setUserType with 'User' when a user is selected", () => {
        render(<UserDropDown {...props} />);
        fireEvent.change(screen.getByRole("combobox"), {
            target: { value: "Bob" }
        });
        expect(props.setUserType).toHaveBeenCalledWith("User");
    });

    it("should update the current user when a user is selected", () => {
        render(<UserDropDown {...props} />);
        fireEvent.change(screen.getByRole("combobox"), {
            target: { value: "Bob" }
        });
        expect(props.setCurrentUser).toHaveBeenCalledWith({
            name: "Bob",
            list_of_items: [
                { name: "meal3", calories: 300 },
                { name: "meal4", calories: 400 }
            ]
        });
    });
});
*/
export{};
