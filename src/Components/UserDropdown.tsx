/* eslint-disable no-extra-parens */
import React from "react";
import { Form } from "react-bootstrap";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import { UserListProps } from "../Interfaces/UserListProps";
import { User } from "../Interfaces/UserObject";
import { CurrentUserProps } from "../Interfaces/CurrentUserProps";
import { Ingredient } from "../Interfaces/IngredientObject";
export function UserDropDown({
    //userType,
    setUserType,
    userList,
    currentUser,
    setCurrentUser
}: UserTypeProps & UserListProps & CurrentUserProps): JSX.Element {
    function updateCurrentUser(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserType("User");
        const userIndex = userList.findIndex(
            (user: User): boolean => user.name === event.target.value
        );
        setCurrentUser({
            name: userList[userIndex].name,
            list_of_items: [
                ...userList[userIndex].list_of_items.map(
                    (ingrediant: Ingredient): Ingredient => ({
                        name: ingrediant.name,
                        serving_size: ingrediant.serving_size,
                        calories: ingrediant.calories,
                        total_fat: ingrediant.total_fat,
                        cholesterol: ingrediant.cholesterol,
                        sodium: ingrediant.sodium,
                        total_carbs: ingrediant.total_carbs,
                        total_sugars: ingrediant.total_sugars,
                        protein: ingrediant.protein
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
