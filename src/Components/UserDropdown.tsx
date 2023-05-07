/* eslint-disable no-extra-parens */
import React from "react";
import { Form } from "react-bootstrap";
import { UserTypeProps } from "../Interfaces/userTypeProps";
import { UserListProps } from "../Interfaces/userListProps";
import { User } from "../Interfaces/UserObject";
import { CurrentUserProps } from "../Interfaces/currentUserProps";
import { Meal } from "../Interfaces/MealObject";
export function UserDropDown({
    //userType,
    setUserType,
    userList,
    currentUser,
    setCurrentUser
}: UserTypeProps & UserListProps & CurrentUserProps): JSX.Element {
    function updateCurrentUser(event: React.ChangeEvent<HTMLSelectElement>) {
        event.target.value === "None"
            ? setUserType("superUser")
            : setUserType("User");
        const userIndex = userList.findIndex(
            (user: User): boolean => user.name === event.target.value
        );
        setCurrentUser({
            name: userList[userIndex].name,
            list_of_items: [
                ...userList[userIndex].list_of_items.map(
                    (meal: Meal): Meal => ({
                        name: meal.name,
                        image: meal.image,
                        serving_size: meal.serving_size,
                        calories: meal.calories,
                        total_fat: meal.total_fat,
                        cholesterol: meal.cholesterol,
                        sodium: meal.sodium,
                        total_carbs: meal.total_carbs,
                        total_sugars: meal.total_sugars,
                        protein: meal.protein
                    })
                )
            ]
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
