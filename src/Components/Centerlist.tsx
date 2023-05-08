/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Button, Form } from "react-bootstrap";
import { MealListProps, Meal } from "../Interfaces/MealObject";

export function MealDraggable({
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
}: Meal): JSX.Element {
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
    }
    const SORT_LIST: string[] = [
        "None",
        "Alphabetical",
        "Reverse Alphabetical",
        "Calories: Lowest to Highest",
        "Calories: Highest to Lowest"
    ];

    if (sortOption === "Alphabetical") {
        setMealList([...mealList].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (sortOption === "Reverse Alphabetical") {
        setMealList(
            [...mealList].sort((a, b) => a.name.localeCompare(b.name)).reverse()
        );
    }
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
