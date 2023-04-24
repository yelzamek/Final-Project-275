import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { userTypeProps } from "../Interfaces/userTypeProps";

export function Counter({ userType }: userTypeProps): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span
            style={{
                display: userType === "superUser" ? "inLine-block" : "none"
            }}
        >
            <Button onClick={() => setValue(1 + value)}>Add User</Button>
            to {value}.
        </span>
    );
}
