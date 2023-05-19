/* eslint-disable indent */
/* eslint-disable no-extra-parens */
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./SubsitituteIngrediantesP.css";
import { Meal, nameProps } from "../Interfaces/MealObject";
import { PointerProps } from "../Interfaces/PointerProps";
import { CurrentUserProps } from "../Interfaces/CurrentUserProps";
import { UserListProps } from "../Interfaces/UserListProps";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import { User } from "../Interfaces/UserObject";

export function SubsitituteIngrediantesP({
    userList,
    name,
    currentUser,
    setPointerEventsEnabled,
    setCurrentUser,
    setUserList
}: UserListProps &
    nameProps &
    UserTypeProps &
    PointerProps &
    CurrentUserProps): JSX.Element {
    const [showPopup, setShowPopup] = useState(false);
    const mealIndex = currentUser.list_of_items.findIndex(
        (meal: Meal) => name === meal.name
    );
    const [currList, setCurrList] = useState<string[]>([
        ...currentUser.list_of_items[mealIndex].ingredients
    ]);
    const [updatedList, setUpdatedList] = useState<Meal[]>([
        ...currentUser.list_of_items
    ]);
    updatedList;
    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    function handleClosePopup() {
        setPointerEventsEnabled(true);
        setShowPopup(false);
    }

    const handleStringChange = (index: number, value: string) => {
        const updatedList = [...currList];
        updatedList[index] = value;
        setCurrList(updatedList);
    };
    function handleSubmit() {
        handleClosePopup();
        const updatedList = currentUser.list_of_items.map(
            (meal: Meal, index: number) =>
                index === mealIndex
                    ? {
                          ...meal,
                          ingredients: [...currList]
                      }
                    : meal
        );

        setUpdatedList(updatedList);

        const updatedCurrentUser: User = {
            ...currentUser,
            list_of_items: updatedList
        };

        setCurrentUser(updatedCurrentUser);

        const userIndex = userList.findIndex(
            (user: User): boolean => user.name === currentUser.name
        );
        const updatedUserList = [
            ...userList.slice(0, userIndex),
            updatedCurrentUser,
            ...userList.slice(userIndex + 1)
        ];

        setUserList(updatedUserList);
        useEffect(() => {
            const updatedList = currentUser.list_of_items.map(
                (meal: Meal, index: number) =>
                    index === mealIndex
                        ? {
                              ...meal,
                              ingredients: [...currList]
                          }
                        : meal
            );
            setUpdatedList(updatedList);
        }, [currList, currentUser.list_of_items, mealIndex]);
    }

    return (
        <div>
            <Button id="itemOpenPopup" onClick={handleOpenPopup}>
                Subsitute Ingrediantes
            </Button>
            {showPopup && (
                <div id="editItemOverlay" className="show">
                    <div id="editItemContent">
                        <Form onSubmit={handleSubmit}>
                            {currList.map((string, index) => (
                                <Form.Group key={index}>
                                    <Form.Control
                                        type="text"
                                        value={string}
                                        onChange={(e) =>
                                            handleStringChange(
                                                index,
                                                e.target.value
                                            )
                                        }
                                    />
                                </Form.Group>
                            ))}
                        </Form>
                        <Button onClick={handleSubmit}>Save</Button>
                    </div>
                </div>
            )}
        </div>
    );
}
