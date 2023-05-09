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
    const [tagFilter, setTagFilter] = useState<string>("All");
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
    function updateTagFilter(event: React.ChangeEvent<HTMLSelectElement>) {
        setTagFilter(event.target.value);
        const selected = event.target.value;
        if (selected === "All") {
            setMealList(MEAL_LIST);
        } else {
            setMealList(
                MEAL_LIST.filter((meal) => meal.tags.includes(selected))
            );
        }
    }
    return (
        <div>
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
            <Form.Group controlId="tagFilter">
                <Form.Label>Filter by tag:</Form.Label>
                <Form.Select value={tagFilter} onChange={updateTagFilter}>
                    <option key="All" value="All">
                        All
                    </option>
                    <option key="Gluten" value="Gluten">
                        Gluten
                    </option>
                    <option key="Vegetarian" value="Vegetarian">
                        Vegetarian
                    </option>
                    <option key="Vegan" value="Vegan">
                        Vegan
                    </option>
                    <option key="Meat" value="Meat">
                        Meat
                    </option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}
/*  return (
        <div>
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
            <Form.Group controlId="tagFilter">
        <Form.Label>Filter by tag:</Form.Label>
        <Form.Select value={tagFilter} onChange={updateTagFilter}>
          <option key="All" value="All">
            All
          </option>
          <option key="Gluten" value="Gluten">
            Gluten
          </option>
          <option key="Vegetarian" value="Vegetarian">
            Vegetarian
          </option>
          <option key="Vegan" value="Vegan">
            Vegan
          </option>
          <option key="Meat" value="Meat">
            Meat
          </option>
        </div>
    );
}
 */
