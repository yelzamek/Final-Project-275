/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Button, Form } from "react-bootstrap";
import { MealListProps, Meal } from "../Interfaces/MealObject";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import { RemoveMeal } from "./AndAndRemoveMeal";

export function MealDraggable(
    {
        name,
        image,
        serving_size,
        calories,
        total_fat,
        cholesterol,
        sodium,
        total_carbs,
        total_sugars,
        protein
    }: Meal,
    { userType }: UserTypeProps
): JSX.Element {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "Meal",
        item: { name: name },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));
    const [DetailsHidden, setDetailsHidden] = useState<boolean>(true);
    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: "bold",
                cursor: "move"
            }}
        >
            <div>{name}</div>
            <img src={image} width="100" height="100"></img>
            <Button onClick={() => setDetailsHidden(!DetailsHidden)}>
                More
            </Button>
            <div
                hidden={DetailsHidden}
                style={{
                    fontSize: 10
                }}
            >
                <div>Serving Size: {serving_size}</div>
                <div>Calories: {calories}</div>
                <div>Total Fat:{total_fat} g</div>
                <div>Cholesterol: {cholesterol} mg</div>
                <div>Sodium: {sodium} mg</div>
                <div>Total Carbs: {total_carbs} g</div>
                <div>Total Sugars: {total_sugars} g</div>
                <div>Protein: {protein} g</div>
            </div>
        </div>
    );
}

export function CenterList({ mealList, setMealList }: MealListProps) {
    const [sortOption, setSortOption] = useState<string>("None");
    function updateSortOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setSortOption(event.target.value);
        if (sortOption === "Alphabetical") {
            const copy = [...mealList];
            setMealList(
                copy.sort((a, b) => a.name.localeCompare(b.name)).reverse()
            );
        }
        if (sortOption === "Reverse Alphabetical") {
            const copy = [...mealList];
            setMealList(copy.sort((a, b) => a.name.localeCompare(b.name)));
        }
        if (sortOption === "Calories: Lowest to Highest") {
            const copy = [...mealList];
            setMealList(
                copy
                    .sort(function (a, b) {
                        if (a.calories < b.calories) {
                            return -1;
                        }
                        if (a.calories > b.calories) {
                            return 1;
                        }
                        return 0;
                    })
                    .reverse()
            );
        }
        if (sortOption === "Calories: Highest to Lowest") {
            const copy = [...mealList];
            setMealList(
                copy.sort(function (a, b) {
                    if (a.calories < b.calories) {
                        return -1;
                    }
                    if (a.calories > b.calories) {
                        return 1;
                    }
                    return 0;
                })
            );
        }
    }
    const SORT_LIST: string[] = [
        "None",
        "Alphabetical",
        "Reverse Alphabetical",
        "Calories: Lowest to Highest",
        "Calories: Highest to Lowest"
    ];

    return (
        <div>
            <div>Center List</div>
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
            </div>
            <div>
                {mealList.map((MealObject: Meal) => (
                    <div key={MealObject.name}>
                        <MealDraggable
                            name={MealObject.name}
                            image={MealObject.image}
                            serving_size={MealObject.serving_size}
                            calories={MealObject.calories}
                            total_fat={MealObject.total_fat}
                            cholesterol={MealObject.cholesterol}
                            sodium={MealObject.sodium}
                            total_carbs={MealObject.total_carbs}
                            total_sugars={MealObject.total_sugars}
                            protein={MealObject.protein}
                        ></MealDraggable>
                    </div>
                ))}
            </div>
        </div>
    );
}
