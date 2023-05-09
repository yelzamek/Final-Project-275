/* eslint-disable no-extra-parens */
import React from "react";
import { Form } from "react-bootstrap";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import { UserListProps } from "../Interfaces/UserListProps";
import { User } from "../Interfaces/UserObject";
import { CurrentUserProps } from "../Interfaces/CurrentUserProps";
import { Meal, MealListProps } from "../Interfaces/MealObject";
export function UserDropDown({
    //userType,
    setUserType,
    userList,
    currentUser,
    setCurrentUser,
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
        const updatedList = [
            ...userList[userIndex].list_of_items.filter((meal: Meal): boolean =>
                mealList.includes(meal)
            )
        ];
        setCurrentUser({
            name: userList[userIndex].name,
            list_of_items: [...updatedList]
        });
    }

    return (
        <div>
            <Form.Group controlId="userList">
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
