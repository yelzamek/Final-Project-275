/* eslint-disable no-extra-parens */
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { CurrentUserProps } from "../Interfaces/currentUserProps";
import { UserListProps } from "../Interfaces/userListProps";
//import { User } from "../Interfaces/UserObject";
import { Meal } from "../Interfaces/MealObject";
import { AddToUserList } from "./addToUserList";

export function UserList({
    currentUser,
    setCurrentUser,
    userList,
    setUserList
}: UserListProps & CurrentUserProps): JSX.Element {
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
