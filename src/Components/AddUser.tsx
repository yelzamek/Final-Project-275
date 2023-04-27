/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Ingredient } from "../Interfaces/IngredientObject";
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
