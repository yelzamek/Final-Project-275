/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Meal } from "../Interfaces/MealObject";
import { User } from "../Interfaces/UserObject";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import { UserListProps } from "../Interfaces/UserListProps";

export function UserSelect({
    userType,
    userList,
    setUserList
}: UserListProps & UserTypeProps): JSX.Element {
    const [newName, setNewName] = useState<string>("");
    function updateNewName(event: React.ChangeEvent<HTMLInputElement>) {
        setNewName(event.target.value);
    }
    function updateUserList(newName: string) {
        setUserList([
            ...userList.map(
                (user: User): User => ({
                    name: user.name,
                    list_of_items: [
                        ...user.list_of_items.map(
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
                })
            ),
            { name: newName, list_of_items: [] }
        ]);
        setNewName("");
    }
    return (
        <div
            style={{
                display: userType === "superUser" ? "inLine-block" : "none"
            }}
        >
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Enter New Users Name:</Form.Label>
                <Form.Control value={newName} onChange={updateNewName} />
            </Form.Group>
            <Button onClick={() => updateUserList(newName)}>Add User</Button>
            {userList.map((user: User) => (
                <div key={user.name}>{user.name}</div>
            ))}
        </div>
    );
}
