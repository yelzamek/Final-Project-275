/* eslint-disable no-extra-parens */
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { CurrentUserProps } from "../Interfaces/currentUserProps";
import { UserListProps } from "../Interfaces/userListProps";
//import { User } from "../Interfaces/UserObject";
import { Meal } from "../Interfaces/MealObject";
import { AddToUserList } from "./addToUserList";

export function ExampleDragableMealItemForTesting() {
    const ExampleMeal: Meal = {
        name: "Tasty Test",
        serving_size: 1,
        calories: 100,
        total_fat: 3,
        cholesterol: 0,
        sodium: 13,
        total_carbs: 7,
        total_sugars: 10,
        protein: 18
    };
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "Meal",
        item: { mealName: ExampleMeal.name },
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
            {ExampleMeal.name}
        </div>
    );
}

export function UserList({
    currentUser,
    setCurrentUser,
    userList,
    setUserList
}: UserListProps & CurrentUserProps): JSX.Element {
    //Delete after center list
    const ExampMeal: Meal = {
        name: "Tasty Test",
        serving_size: 1,
        calories: 100,
        total_fat: 3,
        cholesterol: 0,
        sodium: 13,
        total_carbs: 7,
        total_sugars: 10,
        protein: 18
    };
    function getFoodItem(name: string): Meal {
        //This is going to become a function to retrieve the meal from the center list
        name;
        return ExampMeal;
    }
    const [{ isOver }, drop] = useDrop({
        accept: "Meal",
        drop: (meal: string) =>
            AddToUserList(
                {
                    currentUser,
                    setCurrentUser,
                    userList,
                    setUserList
                },
                getFoodItem(meal)
            ),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });
    return (
        <div ref={drop} style={{ backgroundColor: isOver ? "green" : "white" }}>
            Title
            {currentUser.list_of_items.map((item: Meal) => (
                <div key={item.name}>{item.name}</div>
            ))}
        </div>
    );
}
