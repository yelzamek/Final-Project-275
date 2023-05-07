import React from "react";
import { UserTypeProps } from "../Interfaces/userTypeProps";

export function UserTypeIndicator({ userType }: UserTypeProps): JSX.Element {
    return (
        <div>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "red",
                    display: userType === "superUser" ? "inline-block" : "none",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "blue",
                    display: userType === "Admin" ? "inline-block" : "none",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "green",
                    display: userType === "User" ? "inline-block" : "none",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
            <div>{userType}</div>
        </div>
    );
}
