import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { MealListProps, Meal, MealProps2 } from "../Interfaces/MealObject";
import { nameProps } from "../Interfaces/MealObject";
export const ItemTypes = {
    MEAL: "meal"
};

export function MealDraggable({ name }: Meal): JSX.Element {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "Meal",
        item: { name: name },
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
            {name}
        </div>
    );
}

export function CenterList({ mealList, setMealList }: MealListProps) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "Meal",
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
                        <MealDraggable
                            name={MealObject.name}
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
