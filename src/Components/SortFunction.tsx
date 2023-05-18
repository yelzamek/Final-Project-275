/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { MealListProps } from "../Interfaces/MealObject";
import { Form } from "react-bootstrap";
import { MEAL_LIST } from "../Interfaces/MealObject";

export function SortFunction({
    mealList,
    setMealList
}: MealListProps): JSX.Element {
    const [sortOption, setSortOption] = useState<string>("Alphabetical");
    const SORT_LIST: string[] = [
        "Alphabetical",
        "Reverse Alphabetical",
        "Calories: Lowest to Highest",
        "Calories: Highest to Lowest"
    ];
    function updateSortOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setSortOption(event.target.value);
        const selected = event.target.value;
        if (selected === "None") {
            setMealList(MEAL_LIST);
        }
        if (selected === "Alphabetical") {
            const copy = [...mealList];
            setMealList(copy.sort((a, b) => a.name.localeCompare(b.name)));
        }
        if (selected === "Reverse Alphabetical") {
            const copy = [...mealList];
            setMealList(copy.sort((a, b) => b.name.localeCompare(a.name)));
        }
        if (selected === "Calories: Lowest to Highest") {
            const copy = [...mealList];
            setMealList(copy.sort((a, b) => a.calories - b.calories));
        }
        if (selected === "Calories: Highest to Lowest") {
            const copy = [...mealList];
            setMealList(copy.sort((a, b) => b.calories - a.calories));
        }
    }
    return (
        <div
            className="sort-function-container"
            style={{ position: "absolute", top: 100, marginLeft: "10%" }}
        >
            <Form.Group controlId="sortOption">
                <Form.Label>Sort by:</Form.Label>
                <Form.Select value={sortOption} onChange={updateSortOption}>
                    {SORT_LIST.map((chosenOption: string) => (
                        <option key={chosenOption} value={chosenOption}>
                            {chosenOption}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
