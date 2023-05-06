/* eslint-disable no-extra-parens */
import React from "react";
import { useDrop } from "react-dnd";
import { CurrentUserProps } from "../Interfaces/currentUserProps";
import { UserListProps } from "../Interfaces/userListProps";
//import { User } from "../Interfaces/UserObject";
import { Meal, MealListProps, nameProps } from "../Interfaces/MealObject";
import { Button } from "react-bootstrap";
import { UserTypeProps } from "../Interfaces/userTypeProps";
import { User } from "../Interfaces/UserObject";

export function UserList({
    currentUser,
    setCurrentUser,
    mealList,
    userType,
    userList,
    setUserList
}: UserListProps &
    CurrentUserProps &
    MealListProps &
    UserTypeProps): JSX.Element {
    function addToUserList(name: nameProps) {
        const mealIndex = mealList.findIndex(
            (meal: Meal): boolean => meal.name === name.name
        );
        setCurrentUser({
            name: currentUser.name,
            list_of_items: [...currentUser.list_of_items, mealList[mealIndex]]
        });
        const userIndex = userList.findIndex(
            (user: User): boolean => user.name === currentUser.name
        );
        setUserList([
            ...userList.slice(0, userIndex),
            currentUser,
            ...userList.slice(userIndex + 1)
        ]);
    }
    function RemoveItem(item: Meal, index: number) {
        const updatedList = [...currentUser.list_of_items];
        updatedList.splice(index, 1);
        setCurrentUser({
            name: currentUser.name,
            list_of_items: updatedList
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
        <div
            ref={drop}
            style={{
                display: userType === "User" ? "inline-block" : "none",
                backgroundColor: isOver ? "green" : "white"
            }}
        >
            Title
            {currentUser.list_of_items.map((item: Meal, index: number) => (
                <div key={index}>
                    {item.name}{" "}
                    <Button onClick={() => RemoveItem(item, index)}>X</Button>
                </div>
            ))}
        </div>
    );
}
