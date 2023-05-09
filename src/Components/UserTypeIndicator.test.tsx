import React from "react";
import { render } from "@testing-library/react";
import { UserTypeIndicator } from "./UserTypeIndicator";

describe("UserTypeIndicator", () => {
    it("should render a red box for superUser", () => {
        const { getByTestId } = render(
            <UserTypeIndicator
                userType="superUser"
                setUserType={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const coloredBox = getByTestId("colored-box");
        expect(coloredBox).toHaveStyle("background-color: red");
    });
    it("should render a blue box for Admin", () => {
        const { getByTestId } = render(
            <UserTypeIndicator
                userType="Admin"
                setUserType={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const coloredBox = getByTestId("colored-box");
        expect(coloredBox).toHaveStyle("background-color: blue");
    });
    it("should render a green box for User", () => {
        const { getByTestId } = render(
            <UserTypeIndicator
                userType="User"
                setUserType={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const coloredBox = getByTestId("colored-box");
        expect(coloredBox).toHaveStyle("background-color: green");
    });
    it("should render the user type text", () => {
        const { getByText } = render(
            <UserTypeIndicator
                userType="superUser"
                setUserType={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const userTypeText = getByText("superUser");
        expect(userTypeText).toBeInTheDocument();
    });
});
