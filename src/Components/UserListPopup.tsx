/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./UserListPopup.css";
import { Meal, nameProps } from "../Interfaces/MealObject";
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

    return (
        <div>
            <Button id="itemOpenPopup" onClick={handleOpenPopup}>
                Open Popup
            </Button>

            {showPopup && (
                <div id="itemPopupOverlay" className="show">
                    <div id="itemPopupContent">
                        <h2>{name}</h2>
                        <Button id="itemClosePopup" onClick={handleClosePopup}>
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
