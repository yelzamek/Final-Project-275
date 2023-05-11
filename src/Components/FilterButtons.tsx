import React from "react";
import { Form } from "react-bootstrap";
import { FilterChoicesProps } from "../Interfaces/FilterChoices";
import { UserTypeProps } from "../Interfaces/UserTypeProps";

export function FilterChoices({
    filterChoices,
    setFilterChoices,
    userType
}: FilterChoicesProps & UserTypeProps) {
    function updateFilterChoices(event: React.ChangeEvent<HTMLInputElement>) {
        const copy = [...filterChoices];
        if (event.target.checked === true) {
            copy.push(event.target.value);
            setFilterChoices(copy);
        } else if (event.target.checked === false) {
            const index = copy.indexOf(event.target.value);
            copy.splice(index, 1);
            setFilterChoices(copy);
        }
    }
    return (
        <div>
            <span>
                <Form.Check
                    type="checkbox"
                    id="meat-free-check"
                    label="Meat-Free"
                    value="Meat-Free"
                    onChange={updateFilterChoices}
                />
                <Form.Check
                    type="checkbox"
                    id="dairy-free-check"
                    label="Dairy-Free"
                    value="Dairy-Free"
                    onChange={updateFilterChoices}
                />
                <Form.Check
                    type="checkbox"
                    id="gluten-free-check"
                    label="Gluten-Free"
                    value="Gluten-Free"
                    onChange={updateFilterChoices}
                />
                <Form.Check
                    type="checkbox"
                    id="vegitarian-check"
                    label="Vegetarian"
                    value="vegetarian"
                    onChange={updateFilterChoices}
                />
                <Form.Check
                    type="checkbox"
                    id="vegan-check"
                    label="Vegan"
                    value="Vegan"
                    onChange={updateFilterChoices}
                />
                <span hidden={userType === "superUser" || userType === "Admin"}>
                    <Form.Check
                        type="checkbox"
                        id="favorites-check"
                        label="Favorites"
                        value="Favorites"
                        onChange={updateFilterChoices}
                    />
                </span>
            </span>
        </div>
    );
}
