import { Button } from "react-bootstrap";
import { userTypeProps } from "../Interfaces/userTypeProps";
import React from "react";

export function SuperUserSelectButton({
    setUserType
}: userTypeProps): JSX.Element {
    return <Button onClick={() => setUserType("superUser")}>superUser</Button>;
}

export function AdminSelectButton({ setUserType }: userTypeProps): JSX.Element {
    return <Button onClick={() => setUserType("Admin")}>Admin</Button>;
}
