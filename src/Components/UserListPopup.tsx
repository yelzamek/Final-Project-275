/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import "./UserListPopup.css";
import { nameProps } from "../Interfaces/MealObject";
import { MealListProps } from "../Interfaces/MealObject";

export function ItemPopUp({
    name,
    mealList
}: nameProps & MealListProps): JSX.Element {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const index = mealList.findIndex((object) => object.name === name);

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
                                    Serving Size: {mealList[index].serving_size}
                                </div>
                                <div>Calories: {mealList[index].calories}</div>
                                <div>
                                    Total Fat: {mealList[index].total_fat}
                                </div>
                                <div>
                                    Cholesterol: {mealList[index].cholesterol}{" "}
                                    mg
                                </div>
                                <div>Sodium: {mealList[index].sodium} mg</div>
                                <div>
                                    Total Carbs: {mealList[index].total_carbs} g
                                </div>
                                <div>
                                    Total Sugars: {mealList[index].total_sugars}{" "}
                                    g
                                </div>
                                <div>Protein: {mealList[index].protein} g</div>
                            </div>
                            <Button
                                colorScheme="green"
                                size="sm"
                                id="itemClosePopup"
                                onClick={handleClosePopup}
                            >
                                Close
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </ChakraProvider>
    );
}
