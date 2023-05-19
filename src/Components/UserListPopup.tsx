/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, ChakraProvider, Form } from "@chakra-ui/react";
import "./UserListPopup.css";
import { nameProps } from "../Interfaces/MealObject";
import { MealListProps } from "../Interfaces/MealObject";
import { CurrentUserProps } from "../Interfaces/CurrentUserProps";
import { UserListProps } from "../Interfaces/UserListProps";
import { User } from "../Interfaces/UserObject";

export function ItemPopUp({
    name,
    mealList,
    currentUser,
    setCurrentUser,
    userList,
    setUserList
}: nameProps & MealListProps & CurrentUserProps & UserListProps): JSX.Element {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const index = currentUser.list_of_items.findIndex(
        (object) => object.name === name
    );

    const centerIndex = mealList.findIndex((object) => object.name === name);

    const [newServingSize, setServingSize] = useState<number>(
        mealList[centerIndex].serving_size
    );

    const oldCalories = mealList[centerIndex].calories;
    const oldTotalFat = mealList[centerIndex].total_fat;
    const oldCholesterol = mealList[centerIndex].cholesterol;
    const oldSodium = mealList[centerIndex].sodium;
    const oldTotalCarbs = mealList[centerIndex].total_carbs;
    const oldTotalSugars = mealList[centerIndex].total_sugars;
    const oldProtein = mealList[centerIndex].protein;

    function updateServingSize(event: React.ChangeEvent<HTMLInputElement>) {
        setServingSize(parseInt(event.target.value));
    }
    function updateObject(newServingSize: number) {
        const updatedList = [...currentUser.list_of_items];
        updatedList[index].serving_size = newServingSize;
        updatedList[index].calories =
            oldCalories * updatedList[index].serving_size;
        updatedList[index].total_fat =
            oldTotalFat * updatedList[index].serving_size;
        updatedList[index].cholesterol =
            oldCholesterol * updatedList[index].serving_size;
        updatedList[index].sodium = oldSodium * updatedList[index].serving_size;
        updatedList[index].total_carbs =
            oldTotalCarbs * updatedList[index].serving_size;
        updatedList[index].total_sugars =
            oldTotalSugars * updatedList[index].serving_size;
        updatedList[index].protein =
            oldProtein * updatedList[index].serving_size;
        setCurrentUser({
            name: currentUser.name,
            list_of_items: updatedList,
            list_of_favorites: currentUser.list_of_favorites
        });
        const userIndex = userList.findIndex(
            (user: User): boolean => user.name === currentUser.name
        );
        setUserList([
            ...userList.slice(0, userIndex),
            {
                ...currentUser,
                list_of_items: updatedList,
                list_of_favorites: currentUser.list_of_favorites
            },
            ...userList.slice(userIndex + 1)
        ]);
    }

    return (
        <ChakraProvider>
            <div>
                <Button
                    colorScheme="green"
                    size="sm"
                    id="itemOpenPopup"
                    onClick={handleOpenPopup}
                >
                    Details
                </Button>

            {showPopup && (
                <div id="itemPopupOverlay" className="show">
                    <div id="itemPopupContent">
                        <h2>{name}</h2>
                        <div>
                            <div>
                                <Form.Group controlId="servingSizeChanger">
                                    <Form.Label>Servings:</Form.Label>
                                    <Form.Control
                                        value={newServingSize}
                                        onChange={updateServingSize}
                                        type="number"
                                    ></Form.Control>
                                </Form.Group>
                            </div>
                            <Button
                                onClick={() => updateObject(newServingSize)}
                            >
                                Save Changes
                            </Button>
                            <div>
                                Calories:{" "}
                                {currentUser.list_of_items[index].calories}
                            </div>
                            <div>
                                Total Fat:{" "}
                                {currentUser.list_of_items[index].total_fat}
                            </div>
                            <div>
                                Cholesterol:{" "}
                                {currentUser.list_of_items[index].cholesterol}{" "}
                                mg
                            </div>
                            <div>
                                Sodium:{" "}
                                {currentUser.list_of_items[index].sodium} mg
                            </div>
                            <div>
                                Total Carbs:{" "}
                                {currentUser.list_of_items[index].total_carbs} g
                            </div>
                            <div>
                                Total Sugars:{" "}
                                {currentUser.list_of_items[index].total_sugars}{" "}
                                g
                            </div>
                            <div>
                                Protein:{" "}
                                {currentUser.list_of_items[index].protein} g
                            </div>
                        </div>
                        <Button id="itemClosePopup" onClick={handleClosePopup}>
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
