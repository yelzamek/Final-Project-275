import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { User } from "../Interfaces/UserObject";

export function NutritionalTotalButton({ list_of_items }: User): JSX.Element {
    const [isHidden, setHidden] = useState<boolean>(true);
    let servingSum = 0;
    list_of_items.map((value) => {
        servingSum += value.serving_size;
    });
    return (
        <div>
            <Button onClick={() => setHidden(!isHidden)}>Show Totals:</Button>
            <div hidden={isHidden}>
                <div>Servings: {servingSum}</div>
            </div>
        </div>
    );
}
