/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./UsersWithItemPopup.css";
import { UserListProps } from "../Interfaces/UserListProps";
import { User } from "../Interfaces/UserObject";
import { Meal, nameProps } from "../Interfaces/MealObject";

export function PopUp({
    userList,
    name
}: UserListProps & nameProps): JSX.Element {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <Button id="openPopup" onClick={handleOpenPopup}>
                Open Popup
            </Button>

            {showPopup && (
                <div id="popupOverlay" className="show">
                    <div id="popupContent">
                        <h2>
                            {"User's"} with {name} in their List
                        </h2>
                        <p>
                            {userList.map((user: User) =>
                                user.list_of_items.map((meal: Meal) =>
                                    meal.name === name ? (
                                        <div>{user.name}</div>
                                    ) : undefined
                                )
                            )}
                        </p>
                        <Button id="closePopup" onClick={handleClosePopup}>
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
