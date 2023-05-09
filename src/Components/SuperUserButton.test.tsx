/*
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./SuperUserButton";
import { UserTypeProps } from "../Interfaces/UserTypeProps";

describe("Counter component", () => {
    it("should render the add user button when user type is superUser", () => {
        const props: UserTypeProps = {
            userType: "superUser",
            setUserType: function (): void {
                throw new Error("Function not implemented.");
            }
        };
        render(<Counter {...props} />);

        const addButton = screen.getByRole("button", { name: /add user/i });
        expect(addButton).toBeInTheDocument();
    });

    it("should not render the add user button when user type is not superUser", () => {
        const props: UserTypeProps = {
            userType: "normalUser",
            setUserType: function (): void {
                throw new Error("Function not implemented.");
            }
        };
        render(<Counter {...props} />);

        const addButton = screen.queryByRole("button", { name: /add user/i });
        expect(addButton).not.toBeInTheDocument();
    });

    it("should increase the user count when add user button is clicked", () => {
        const props: UserTypeProps = {
            userType: "superUser",
            setUserType: function (): void {
                throw new Error("Function not implemented.");
            }
        };
        render(<Counter {...props} />);

        const addButton = screen.getByRole("button", { name: /add user/i });
        expect(screen.getByText(/to 0\./i)).toBeInTheDocument();

        userEvent.click(addButton);
        expect(screen.getByText(/to 1\./i)).toBeInTheDocument();

        userEvent.click(addButton);
        expect(screen.getByText(/to 2\./i)).toBeInTheDocument();
    });
});
*/
