/* eslint-disable indent */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import "./UsersWithItemPopup.css";
import { UserListProps } from "../Interfaces/UserListProps";
import { User } from "../Interfaces/UserObject";
import { Meal, nameProps } from "../Interfaces/MealObject";
import { UserTypeProps } from "../Interfaces/UserTypeProps";
import { PointerProps } from "../Interfaces/PointerProps";

export function PopUp({
    userList,
    name,
    userType,
    setPointerEventsEnabled
}: UserListProps & nameProps & UserTypeProps & PointerProps): JSX.Element {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
        setPointerEventsEnabled(false);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setPointerEventsEnabled(true);
    };

    return (
        <div hidden={!(userType === "superUser")}>
            <ChakraProvider>
                <Button
                    id="openPopup"
                    onClick={handleOpenPopup}
                    colorScheme="green"
                    size="sm"
                >
                    Open Popup
                </Button>
            </ChakraProvider>

            {showPopup && (
                <div id="popupOverlay" className="show">
                    <div id="popupContent">
                        <h2>
                            {"User's"} with {name} in their List
                        </h2>
                        <p>
                            {userList.map((user: User) =>
                                user.list_of_items.some(
                                    (meal: Meal) => meal.name === name
                                ) ? (
                                    <div key={user.name}>{user.name}</div>
                                ) : null
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
