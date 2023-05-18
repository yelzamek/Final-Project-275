/* eslint-disable no-extra-parens */
import React from "react";
import { Form } from "react-bootstrap";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import { UserListProps } from "../Interfaces/UserListProps";
import { User } from "../Interfaces/UserObject";
import { Meal, MealListProps } from "../Interfaces/MealObject";
import { CurrentUserProps } from "../Interfaces/CurrentUserProps";
export function UserDropDown({
    //userType,
    setUserType,
    userList,
    currentUser,
    setCurrentUser,
    setUserList,
    mealList
}: UserTypeProps &
    UserListProps &
    CurrentUserProps &
    MealListProps): JSX.Element {
    function updateCurrentUser(event: React.ChangeEvent<HTMLSelectElement>) {
        event.target.value === "None"
            ? setUserType("superUser")
            : setUserType("User");
        const userIndex = userList.findIndex(
            (user: User): boolean => user.name === event.target.value
        );
        const selectedUser = userList[userIndex];
        const copiedItems = selectedUser.list_of_items.filter((meal: Meal) =>
            mealList.includes(meal)
        );
        const copiedFavorites = selectedUser.list_of_favorites.filter(
            (meal: Meal) => mealList.includes(meal)
        );

        setCurrentUser({
            name: selectedUser.name,
            list_of_items: copiedItems,
            list_of_favorites: copiedFavorites
        });

        const updatedUserList = userList.map((user: User) =>
            user.name === selectedUser.name
                ? { ...selectedUser, list_of_items: copiedItems }
                : user
        );

        setUserList(updatedUserList);
    }

    return (
        <div>
            <Form.Group
                controlId="userList"
                style={{ backgroundColor: "white" }}
            >
                <Form.Label>Select your user</Form.Label>
                <Form.Select
                    value={currentUser.name}
                    onChange={updateCurrentUser}
                >
                    {userList.map((user: User) => (
                        <option key={user.name} value={user.name}>
                            {user.name}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
