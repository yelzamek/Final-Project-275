import { Button } from "react-bootstrap";
import { UserTypeProps } from "../Interfaces/userTypeProps";
import React from "react";

export function SuperUserSelectButton({
    setUserType
}: UserTypeProps): JSX.Element {
    return <Button onClick={() => setUserType("superUser")}>superUser</Button>;
}

export function AdminSelectButton({ setUserType }: UserTypeProps): JSX.Element {
    return <Button onClick={() => setUserType("Admin")}>Admin</Button>;
}
