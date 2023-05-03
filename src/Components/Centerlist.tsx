import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
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
            {meal2.name}
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
