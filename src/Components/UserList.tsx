/* eslint-disable no-extra-parens */
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { CurrentUserProps } from "../Interfaces/currentUserProps";
import { UserListProps } from "../Interfaces/userListProps";
//import { User } from "../Interfaces/UserObject";
import { Meal, MealListProps, nameProps } from "../Interfaces/MealObject";
import { AddToUserList } from "./addToUserList";

export function UserList({
    currentUser,
    setCurrentUser,
    userList,
    setUserList,
    mealList,
    setMealList
}: UserListProps & CurrentUserProps & MealListProps): JSX.Element {
    function addToUserList(name: nameProps) {
        const mealIndex = mealList.findIndex(
            (meal: Meal): boolean => meal.name === name.name
        );
        setCurrentUser({
            name: currentUser.name,
            list_of_items: [...currentUser.list_of_items, mealList[mealIndex]]
        });
    }
    const [{ isOver }, drop] = useDrop({
        accept: "Meal",
        drop: (name: nameProps) => addToUserList(name),
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
