import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Button } from "react-bootstrap";
import { MealListProps, Meal, MealProps2 } from "../Interfaces/MealObject";

export const ItemTypes = {
    MEAL: "meal"
};

export function MealDraggable({ meal2 }: MealProps2): JSX.Element {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.MEAL,
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
            <div>{meal2.name}</div>
            <img src={meal2.image} width="100" height="100"></img>
            <Button onClick={() => setDetailsHidden(!DetailsHidden)}>
                More
            </Button>
            <div
                hidden={DetailsHidden}
                style={{
                    fontSize: 10
                }}
            >
                <div>Serving Size: {meal2.serving_size}</div>
                <div>Calories: {meal2.calories}</div>
                <div>Total Fat:{meal2.total_fat} g</div>
                <div>Cholesterol: {meal2.cholesterol} mg</div>
                <div>Sodium: {meal2.sodium} mg</div>
                <div>Total Carbs: {meal2.total_carbs} g</div>
                <div>Total Sugars: {meal2.total_sugars} g</div>
                <div>Protein: {meal2.protein} g</div>
            </div>
        </div>
    );
}

export function CenterList({ mealList, setMealList }: MealListProps) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.MEAL,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));
    return (
        <div>
            <div>Center List</div>
            <div>
                {mealList.map((MealObject: Meal) => (
                    <div key={MealObject.name}>
                        <MealDraggable meal2={MealObject}></MealDraggable>
                    </div>
                ))}
            </div>
        </div>
    );
}
