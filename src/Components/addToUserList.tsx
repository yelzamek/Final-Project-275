import { Button } from "react-bootstrap";
import React, { useState } from "react";
//import { currentUserProps } from "../Interfaces/currentUserProps";
//import { Ingredient } from "../Interfaces/IngredientObject";
import { UserListProps } from "../Interfaces/userListProps";
import { CurrentUserProps } from "../Interfaces/currentUserProps";
import { User } from "../Interfaces/UserObject";
import { Meal } from "../Interfaces/MealObject";
export function AddToUserList(
    {
        currentUser,
        setCurrentUser,
        userList,
        setUserList
    }: UserListProps & CurrentUserProps,
    item: Meal
) {
    const userIndex = userList.findIndex(
        (user: User): boolean => user.name === currentUser.name
    );
    setCurrentUser({
        name: currentUser.name,
        list_of_items: [...currentUser.list_of_items, item]
    });
    setUserList([
        ...userList.slice(0, userIndex),
        currentUser,
        ...userList.slice(userIndex + 1)
    ]);
}
