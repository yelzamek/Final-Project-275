/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Meal } from "../Interfaces/MealObject";
import { User } from "../Interfaces/UserObject";
import { UserTypeProps } from "../Interfaces/userTypeProps";
import { UserListProps } from "../Interfaces/userListProps";

export function AddUser({
    userType,
    userList,
    setUserList
}: UserListProps & UserTypeProps): JSX.Element {
    const [newName, setNewName] = useState<string>("Type New User Name Here");
    const [working, setWorking] = useState<boolean>(false);
    function updateNewName(event: React.ChangeEvent<HTMLInputElement>) {
        working ? setNewName(event.target.value) : undefined;
    }
    function startWorkingHelper() {
        setNewName("");
        setWorking(true);
    }
    function startWorking() {
        working ? undefined : startWorkingHelper();
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
        setWorking(false);
        setNewName("Type New User Name Here");
    }
    return (
        <div
            style={{
                display: userType === "superUser" ? "inLine-block" : "none"
            }}
        >
            <Form.Group
                controlId="formCheckAnswer"
                onClick={() => startWorking()}
            >
                <Form.Label>Enter New Users Name:</Form.Label>
                <Form.Control
                    style={{
                        width: "300px",
                        color: working ? "black" : "lightgray",
                        fontWeight: working ? "normal" : "bold"
                    }}
                    value={newName}
                    onChange={updateNewName}
                />
            </Form.Group>
            <Button onClick={() => updateUserList(newName)}>Add User</Button>
            {userList.map((user: User) => (
                <div key={user.name}>{user.name}</div>
            ))}
        </div>
    );
}
